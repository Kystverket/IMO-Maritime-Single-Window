using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using IMOMaritimeSingleWindow.Auth;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Extensions;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.SpreadSheet.Sheets;
using IMOMaritimeSingleWindow.SpreadSheet.SpreadSheetValidators;
using log4net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.RegularExpressions;
using static IMOMaritimeSingleWindow.Helpers.Constants.Strings;
using static IMOMaritimeSingleWindow.SpreadSheet.MappingMethods.CommonMappingMethods;
using Claims = IMOMaritimeSingleWindow.Helpers.Constants.Strings.Claims;

namespace IMOMaritimeSingleWindow.Controllers
{
    public class TemplateModel
    {
        public string CaptainName { get; set; }
        public string VesselName { get; set; }
        public string ImoNumber { get; set; }
        public string PortOfCall { get; set; }
        public string NumberOfCrew { get; set; }
        public string NumberOfPax { get; set; }
        public string NumberOfTransit { get; set; }
        public string PortCallDateTime { get; set; }
        public string LastPortCall { get; set; }
        public string NextPortCall { get; set; }
        public string NextPortDateTime { get; set; }
        public string CountryOfCall { get; set; }
        public string CurrentDate { get; set; }
        public string LastPortDateTime { get; set; }
    }

    [Route("api/[controller]")]
    public class FileController : Controller
    {
        static readonly ILog Logger = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        readonly open_ssnContext _context;
        private IHostingEnvironment _hostingEnvironment;


        public FileController(open_ssnContext context, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }

        [HasClaim(Claims.Types.PORT_CALL, Claims.Values.VIEW)]
        [Authorize(Roles = UserRoles.Admin + ", " + UserRoles.SuperAdmin + ", " + UserRoles.Customs + ", " + UserRoles.Agent + ", " + UserRoles.HealthAgency)]
        [HttpGet("CertificateOfClearanceToken/{portCallId}")]
        public IActionResult CertificateOfClearanceToken(int portCallId)
        {
            try
            {
                var userId = this.GetUserId();
                var dbUser = _context.User.Where(u => u.UserId.ToString().Equals(userId))
                                        .Include(u => u.Organization.OrganizationType)
                                        .FirstOrDefault();
                var userRole = this.GetUserRoleName();

                if (dbUser == null)
                {
                    throw new ArgumentNullException();
                }
                var portCall = new PortCall();

                if (userRole == UserRoles.Admin || userRole == UserRoles.SuperAdmin)
                {
                    portCall = _context.PortCall
                   .Where(pc => pc.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DELETED)
                   .Include(x => x.Location)
                       .ThenInclude(x => x.Country)
                   .Include(x => x.NextLocation)
                   .Include(x => x.PersonOnBoard)
                       .ThenInclude(x => x.PersonOnBoardType)
                   .Include(x => x.Ship)
                   .Include(x => x.PreviousLocation)
                   .FirstOrDefault(pc => pc.PortCallId == portCallId);
                }
                else if (userRole == UserRoles.Agent || userRole == UserRoles.Customs || userRole == UserRoles.HealthAgency)
                {
                    portCall = _context.PortCall
                    .Where(pc => pc.User.OrganizationId == dbUser.OrganizationId && pc.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DELETED)
                    .Include(x => x.Location)
                        .ThenInclude(x => x.Country)
                    .Include(x => x.NextLocation)
                    .Include(x => x.PersonOnBoard)
                        .ThenInclude(x => x.PersonOnBoardType)
                    .Include(x => x.Ship)
                    .Include(x => x.PreviousLocation)
                    .FirstOrDefault(pc => pc.PortCallId == portCallId);
                }

                if (portCall == null)
                {
                    throw new ArgumentNullException("Port Call not found");
                }

                if (portCall.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_CLEARED)
                {
                    throw new InvalidDataException("Port Call not cleared");
                }

                //Generate token
                byte[] time = BitConverter.GetBytes(DateTime.UtcNow.ToBinary());
                byte[] key = Guid.NewGuid().ToByteArray();
                string token = Convert.ToBase64String(time.Concat(key).ToArray());

                var url = "certificateOfClearance/" + portCallId.ToString() + "?token=" + token;

                return Json(url);
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                Logger.Error(ex.Message);
                Logger.Error(ex.InnerException);
                Logger.Error(ex.StackTrace);
                throw ex;
            }
        }

        [HttpGet("CertificateOfClearance/{portCallId}")]
        public FileStreamResult GetCertificateOfClearance(int portCallId, [FromQuery]string token)
        {
            try
            {
                //Decrypt token
                token = token.Replace(" ", "+");
                byte[] data = Convert.FromBase64String(token);
                DateTime when = DateTime.FromBinary(BitConverter.ToInt64(data, 0));
                if (when < DateTime.UtcNow.AddMinutes(-1))
                {
                    throw new ArgumentException("Url is stale");
                }

                var portCall = _context.PortCall
                   .Include(x => x.Location)
                       .ThenInclude(x => x.Country)
                   .Include(x => x.NextLocation)
                   .Include(x => x.PersonOnBoard)
                       .ThenInclude(x => x.PersonOnBoardType)
                   .Include(x => x.Ship)
                   .Include(x => x.PreviousLocation)
                   .FirstOrDefault(pc => pc.PortCallId == portCallId);

                if (portCall == null)
                {
                    throw new ArgumentNullException();
                }

                var model = new TemplateModel
                {
                    CaptainName = portCall.PersonOnBoard.FirstOrDefault(x => x.IsCaptain.HasValue && x.IsCaptain.Value) != null ? portCall.PersonOnBoard.FirstOrDefault(x => x.IsCaptain.Value).FamilyName : "<Captain Not Found>",
                    ImoNumber = portCall.Ship.ImoNo.HasValue ? portCall.Ship.ImoNo.Value.ToString() : "<Imo Number Not Found>",
                    VesselName = portCall.Ship.Name,
                    PortOfCall = portCall.Location.Name,
                    PortCallDateTime = portCall.LocationEta.DateTime.ToString(),
                    NumberOfCrew = portCall.PersonOnBoard.Where(x => x.PersonOnBoardType.EnumValue == PERSON_ON_BOARD_TYPE_ENUM.CREW.ToString()).Count().ToString(),
                    NumberOfPax = portCall.PersonOnBoard.Where(x => x.PersonOnBoardType.EnumValue == PERSON_ON_BOARD_TYPE_ENUM.PAX.ToString()).Count().ToString(),
                    NumberOfTransit = portCall.PersonOnBoard.Where(x => x.InTransit.HasValue && x.InTransit.Value).Count().ToString(),
                    LastPortCall = portCall.PreviousLocation != null ? portCall.PreviousLocation.Name : "<Port Not Found>",
                    LastPortDateTime = portCall.PreviousLocationEtd.HasValue ? portCall.PreviousLocationEtd.Value.ToString("MM / dd / yyyy HH: mm") : "<DateTime Not Found>",
                    NextPortCall = portCall.NextLocation != null ? portCall.NextLocation.Name : "<Port Not Found>",
                    NextPortDateTime = portCall.NextLocationEta.HasValue ? portCall.NextLocationEta.Value.ToString("MM / dd / yyyy HH: mm") : "<DateTime Not Found>",
                    CountryOfCall = portCall.Location?.Country.Name,
                    CurrentDate = DateTime.Now.ToShortDateString(),
                };


                var documentPath = _hostingEnvironment.WebRootPath + "\\Documents\\";

                var templatePath = documentPath + "CERTIFICATE_TEMPLATE.docx";

                byte[] byteArray = System.IO.File.ReadAllBytes(templatePath);
                MemoryStream mem = new MemoryStream();
                mem.Write(byteArray, 0, byteArray.Length);
                using (WordprocessingDocument wordDoc =
                    WordprocessingDocument.Open(mem, true))
                {
                    var body = wordDoc.MainDocumentPart.Document.Body;

                    foreach (var element in body.Descendants<Text>())
                    {
                        //reflection
                        foreach (var property in typeof(TemplateModel).GetProperties())
                        {
                            //make sure the property name matches the template
                            if (element.Text.Contains($"{property.Name}"))
                            {
                                //get the value from the actual model instance
                                element.Text = element.Text.Replace($"{property.Name}", (string)property.GetValue(model));
                            }
                        }
                    }
                }
                mem.Seek(0, SeekOrigin.Begin);
                var result = new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new ByteArrayContent(mem.ToArray())
                };
                result.Content.Headers.ContentDisposition =
                    new ContentDispositionHeaderValue("attachment")
                    {
                        FileName = string.Format("{0}_{1}.docx", model.VesselName, DateTime.Now.ToString("ddMMyyyyHHmmss"))
                    };
                result.Content.Headers.ContentType =
                    new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.wordprocessingml.document");

                mem.Seek(0, SeekOrigin.Begin);

                var file = new FileStreamResult(mem, "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
                {
                    FileDownloadName = string.Format("{0}_{1}.docx", model.VesselName, DateTime.Now.ToString("ddMMyyyyHHmmss"))
                };

                return file;
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                Logger.Error(ex.Message);
                Logger.Error(ex.InnerException);
                Logger.Error(ex.StackTrace);
                throw ex;
            }
        }

        [HttpPost("passengers/{portCallId}"), DisableRequestSizeLimit]
        public ActionResult UploadPaxFile(int portCallId)
        {
            try
            {
                var file = Request.Form.Files.FirstOrDefault();
                var folderName = "Upload";
                var rootPath = _hostingEnvironment.WebRootPath;
                var newPath = Path.Combine(rootPath, folderName);
                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }

                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(newPath, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                        var PaxList = new List<PersonOnBoard>();
                        var fi = new FileInfo(fullPath);
                        using (var package = new ExcelPackage(fi))
                        {
                            var paxSheetDefinition = new PaxSheet();

                            var workbook = package.Workbook;
                            var worksheet = workbook.Worksheets[paxSheetDefinition.Sheetname];
                            var paxTypeId = _context.PersonOnBoardType.Where(pobt => pobt.EnumValue == PERSON_ON_BOARD_TYPE_ENUM.PAX.ToString()).FirstOrDefault().PersonOnBoardTypeId;

                            PaxList = ConvertToPax(worksheet, paxSheetDefinition, paxTypeId, portCallId);
                            var PaxListWithErrors = new List<PersonOnBoard>();
                            var saved = false;

                            if (PaxList.Any(x => x.Errors.Any()))
                            {
                                PaxList.ForEach(pax => pax.PortCall = null);
                                PaxListWithErrors = PaxList.Where(pax => pax.Errors.Any()).ToList();
                                PaxList = PaxList.Where(x => !x.Errors.Any()).ToList();
                            }
                            if (PaxList.Any())
                            {
                                saved = SavePoBToPortCall(PaxList, portCallId, paxTypeId);
                            }

                            if (PaxListWithErrors.Any())
                            {
                                return Json(PaxListWithErrors);
                            }
                            if (saved)
                                return Json(true);

                            return Json(false);
                        }
                    }
                }

                return Json(true);

            }
            catch (Exception ex)
            {
                return Json(false);
            }
        }

        [HttpPost("crew/{portCallId}"), DisableRequestSizeLimit]
        public ActionResult UploadCrewFile(int portCallId)
        {
            try
            {
                var file = Request.Form.Files.FirstOrDefault();
                var folderName = "Upload";
                var rootPath = _hostingEnvironment.WebRootPath;
                var newPath = Path.Combine(rootPath, folderName);
                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }

                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(newPath, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                        var Crew = new List<PersonOnBoard>();
                        var fi = new FileInfo(fullPath);
                        using (var package = new ExcelPackage(fi))
                        {
                            var crewSheetDefinition = new CrewSheet();

                            var workbook = package.Workbook;
                            var worksheet = workbook.Worksheets[crewSheetDefinition.Sheetname];
                            var crewTypeId = _context.PersonOnBoardType.Where(pobt => pobt.EnumValue == PERSON_ON_BOARD_TYPE_ENUM.CREW.ToString()).FirstOrDefault().PersonOnBoardTypeId;

                            Crew = ConvertToCrew(worksheet, crewSheetDefinition, crewTypeId, portCallId);
                            var CrewListWithErrors = new List<PersonOnBoard>();
                            var saved = false;

                            if (Crew.Any(c => c.Errors.Any()))
                            {
                                Crew.ForEach(c => c.PortCall = null);
                                CrewListWithErrors = Crew.Where(c => c.Errors.Any()).ToList();
                                Crew = Crew.Where(c => !c.Errors.Any()).ToList();
                            }
                            if (Crew.Any())
                            {
                                saved = SavePoBToPortCall(Crew, portCallId, crewTypeId);
                            }
                            if (CrewListWithErrors.Any())
                            {
                                return Json(CrewListWithErrors);
                            }
                            if (saved)
                                return Json(true);

                            return Json(false);
                        }
                    }
                }

                return Json(true);

            }
            catch (Exception ex)
            {
                return Json(false);
            }
        }
        [HttpPost("crewpax/{portCallId}"), DisableRequestSizeLimit]
        public ActionResult UploadCrewPaxFile(int portCallId)
        {
            try
            {
                var file = Request.Form.Files.FirstOrDefault();
                var folderName = "Upload";
                var rootPath = _hostingEnvironment.WebRootPath;
                var newPath = Path.Combine(rootPath, folderName);
                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }

                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(newPath, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                        var Crew = new List<PersonOnBoard>();
                        var Pax = new List<PersonOnBoard>();
                        var fi = new FileInfo(fullPath);
                        using (var package = new ExcelPackage(fi))
                        {
                            var crewSheetDefinition = new CrewSheet();
                            var paxSheetDefinition = new PaxSheet();

                            var workbook = package.Workbook;
                            var crewSheet = workbook.Worksheets[crewSheetDefinition.Sheetname];
                            var paxSheet = workbook.Worksheets[paxSheetDefinition.Sheetname];

                            var crewTypeId = _context.PersonOnBoardType.Where(pobt => pobt.EnumValue == PERSON_ON_BOARD_TYPE_ENUM.CREW.ToString()).FirstOrDefault().PersonOnBoardTypeId;
                            var paxTypeId = _context.PersonOnBoardType.Where(pobt => pobt.EnumValue == PERSON_ON_BOARD_TYPE_ENUM.PAX.ToString()).FirstOrDefault().PersonOnBoardTypeId;


                            Crew = ConvertToCrew(crewSheet, crewSheetDefinition, crewTypeId, portCallId);
                            Pax = ConvertToPax(paxSheet, paxSheetDefinition, paxTypeId, portCallId);

                            var crewAndPax = Crew;
                            crewAndPax.AddRange(Pax);

                            var crewAndPaxWithErrors = new List<PersonOnBoard>();
                            var saved = false;

                            if (crewAndPax.Any(x => x.Errors.Any()))
                            {
                                crewAndPax.ForEach(x => x.PortCall = null);
                                crewAndPaxWithErrors = crewAndPax.Where(x => x.Errors.Any()).ToList();
                                crewAndPax = crewAndPax.Where(x => !x.Errors.Any()).ToList();
                            }

                            if (crewAndPax.Any())
                            {
                                saved = SaveCrewAndPaxToPortCall(crewAndPax, portCallId);
                            }

                            if (crewAndPaxWithErrors.Any())
                            {
                                return Json(crewAndPaxWithErrors);
                            }
                            if (saved)
                                return Json(true);

                            return Json(false);
                        }
                    }
                }
                return Json(true);

            }
            catch (Exception ex)
            {
                return Json(false);
            }
        }

        [HttpPost("shipStores/{portCallId}"), DisableRequestSizeLimit]
        public IActionResult UploadShipStoresFile(int portCallId)
        {
            try
            {
                var file = Request.Form.Files.FirstOrDefault();

                if (file != null && file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var timeStamp = DateTime.Now.ToString("yyyyMMddHHmmssfff");
                    fileName += " - " + timeStamp;
                    var fullPath = Path.Combine(Path.GetTempPath(), fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                        var ShipStores = new List<FalShipStores>();
                        var fi = new FileInfo(fullPath);
                        using (var package = new ExcelPackage(fi))
                        {
                            var shipStoreSheetDefinition = new ShipStoresSheet();

                            var workbook = package.Workbook;
                            var shipStoreSheet = workbook.Worksheets[shipStoreSheetDefinition.Sheetname];

                            ShipStores = ConvertToShipStores(shipStoreSheet, shipStoreSheetDefinition, portCallId);
                            var shipStoresWithErrors = new List<FalShipStores>();
                            var saved = false;

                            if (ShipStores.Any(x => x.Errors.Any()))
                            {
                                ShipStores.ForEach(ss => ss.PortCall = null);
                                shipStoresWithErrors = ShipStores.Where(x => x.Errors.Any()).ToList();
                                ShipStores = ShipStores.Where(x => !x.Errors.Any()).ToList();

                            }
                            if (ShipStores.Any())
                            {
                                saved = SaveShipStoresToPortCall(ShipStores, portCallId);
                            }

                            if (shipStoresWithErrors.Any())
                            {
                                return Json(shipStoresWithErrors);
                            }
                            if (saved)
                                return Json(true);

                            return Json(false);
                        }
                    }
                }

                return Json(true);

            }
            catch (Exception ex)
            {
                return Json("Upload Failed: " + ex.Message);
            }
        }

        private bool SaveShipStoresToPortCall(List<FalShipStores> shipStores, int portCallId)
        {
            var portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId).FirstOrDefault();
            if (portCall != null)
            {

                try
                {
                    _context.FalShipStores.RemoveRange(_context.FalShipStores.Where(fss => fss.PortCallId == portCallId));

                    if (shipStores.Any())
                    {
                        _context.FalShipStores.AddRange(shipStores);
                    }

                    _context.SaveChanges();
                    return true;
                }
                catch (Exception ex)
                {
                    return false;

                }
            }
            return false;
        }
        private bool SavePoBToPortCall(List<PersonOnBoard> pobList, int portCallId, int personTypeId)
        {
            var portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId).FirstOrDefault();
            if (portCall != null)
            {
                try
                {
                    new PortCallController(_context).UpdatePersonOnBoardList(pobList, portCallId, personTypeId);

                    return true;
                }
                catch (Exception ex)
                {
                    return false;
                }

            }
            return false;
        }

        private bool SaveCrewAndPaxToPortCall(List<PersonOnBoard> crewAndPax, int portCallId)
        {
            var portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId).FirstOrDefault();
            if (portCall != null)
            {
                try
                {
                    _context.PersonOnBoard.RemoveRange(_context.PersonOnBoard.Where(s => s.PortCallId == portCallId));
                    _context.PersonOnBoard.AddRange(crewAndPax);
                    _context.SaveChanges();

                    return true;
                }
                catch (Exception ex)
                {
                    return false;
                }
            }
            return false;
        }

        private List<PersonOnBoard> ConvertToPax(ExcelWorksheet worksheet, PaxSheet sheetDefinition, int paxTypeId, int portCallId)
        {
            var paxList = new List<PersonOnBoard>();
            var validator = new PersonOnBoardSpreadSheetValidator();
            var identityType = _context.IdentityDocumentType.Where(idt => idt.EnumValue == IDENTITY_DOCUMENT_TYPES.PASSPORT.ToString()).FirstOrDefault();
            var sequenceNo = 0;
            var genders = _context.Gender.ToList();
            var portDictionairy = new Dictionary<string, int>();
            var countriesDictionairy = new Dictionary<string, int>();

            for (var rowNum = sheetDefinition.startRow; rowNum <= worksheet.Dimension.End.Row; rowNum++)
            {
                var row = worksheet.Cells[string.Format("{0}:{0}", rowNum)];

                var LastName = worksheet.Cells[rowNum, sheetDefinition.LastNameAddress].Text;
                var FirstName = worksheet.Cells[rowNum, sheetDefinition.FirstNameAddress].Text + " " + worksheet.Cells[rowNum, sheetDefinition.MiddleNameAddress].Text;
                var Nationality = worksheet.Cells[rowNum, sheetDefinition.NationalityAddress].Text;
                var Sex = worksheet.Cells[rowNum, sheetDefinition.SexAddress].Text;
                var DateOfBirth = worksheet.Cells[rowNum, sheetDefinition.DateOfBirthAddress].Text;
                var DocumentNumber = worksheet.Cells[rowNum, sheetDefinition.DocumentNumberAddress].Text;
                var CountryOfIssue = worksheet.Cells[rowNum, sheetDefinition.CountryOfIssueAddress].Text;
                var DateOfExpiry = worksheet.Cells[rowNum, sheetDefinition.DateOfExpiryAddress].Text;
                var PortOfEmbarkation = worksheet.Cells[rowNum, sheetDefinition.PortOfEmbarkAddress].Text;
                var PortOfDebarkation = worksheet.Cells[rowNum, sheetDefinition.PortOfDebarkAddress].Text;
                var VisaNumber = worksheet.Cells[rowNum, sheetDefinition.VisaNumberAddress].Text;
                var PlaceOfBirth = worksheet.Cells[rowNum, sheetDefinition.PlaceOfBirthAddress].Text;
                var TransitPax = worksheet.Cells[rowNum, sheetDefinition.TransPassengerAddress].Text;

                Regex rgx = new Regex("[^a-zA-Z0-9 -]");

                LastName = rgx.Replace(LastName, "");
                FirstName = rgx.Replace(FirstName, "");

                FirstName = FirstName.TrimEnd();

                if (string.IsNullOrWhiteSpace(LastName) && string.IsNullOrWhiteSpace(FirstName))
                    continue;


                Nationality = rgx.Replace(Nationality, "");
                Sex = rgx.Replace(Sex, "");
                DocumentNumber = rgx.Replace(DocumentNumber, "");
                CountryOfIssue = rgx.Replace(CountryOfIssue, "");
                PortOfEmbarkation = rgx.Replace(PortOfEmbarkation, "");
                PortOfDebarkation = rgx.Replace(PortOfDebarkation, "");
                VisaNumber = rgx.Replace(VisaNumber, "");
                PlaceOfBirth = rgx.Replace(PlaceOfBirth, "");
                TransitPax = rgx.Replace(TransitPax, "");

                var pax = new PersonOnBoard
                {
                    FamilyName = LastName,
                    GivenName = FirstName,
                    PersonOnBoardTypeId = paxTypeId,
                    PortCallId = portCallId
                };

                if (!string.IsNullOrWhiteSpace(Nationality))
                {
                    if (countriesDictionairy.ContainsKey(Nationality))
                    {
                        pax.NationalityId = countriesDictionairy.GetValueOrDefault(Nationality);
                    }
                    else
                    {
                        var nationality = GetCountryByThreeCharCode(Nationality);
                        if (nationality != null)
                        {
                            pax.NationalityId = nationality.CountryId;
                            countriesDictionairy.Add(Nationality, nationality.CountryId);
                        }
                    }
                }
                if (!string.IsNullOrWhiteSpace(Sex))
                {
                    var genderEnum = ConvertToGender(Sex);
                    var gender = genders.FirstOrDefault(g => g.EnumValue == genderEnum.ToString());

                    if (gender == null)
                        gender = genders.FirstOrDefault(g => g.EnumValue == GENDER_TYPES.OTHER.ToString());

                    pax.GenderId = gender.GenderId;
                }
                if (!string.IsNullOrWhiteSpace(DateOfBirth))
                {
                    pax.DateOfBirth = ConvertToDatetime(DateOfBirth);
                }
                if (!string.IsNullOrWhiteSpace(DocumentNumber) || !string.IsNullOrWhiteSpace(CountryOfIssue) || !string.IsNullOrWhiteSpace(DateOfExpiry))
                {
                    var expiryDate = ConvertToDatetime(DateOfExpiry);

                    if (identityType != null)
                    {
                        var identityDocument = new IdentityDocument
                        {
                            IdentityDocumentNumber = DocumentNumber,
                            IdentityDocumentExpiryDate = expiryDate,
                            IdentityDocumentType = identityType
                        };
                        if (countriesDictionairy.ContainsKey(CountryOfIssue))
                        {
                            identityDocument.IssuingNationId = countriesDictionairy.GetValueOrDefault(CountryOfIssue);
                        }
                        else
                        {
                            var issuingNation = GetCountryByThreeCharCode(CountryOfIssue);
                            if (issuingNation != null)
                            {
                                identityDocument.IssuingNationId = issuingNation.CountryId;
                                countriesDictionairy.Add(CountryOfIssue, issuingNation.CountryId);
                            }
                        }

                        pax.IdentityDocument = new List<IdentityDocument>
                        {
                            identityDocument
                        };
                    }
                }

                if (!string.IsNullOrWhiteSpace(PortOfEmbarkation))
                {
                    if (portDictionairy.ContainsKey(PortOfEmbarkation))
                    {
                        pax.PortOfEmbarkationId = portDictionairy.GetValueOrDefault(PortOfEmbarkation);
                    }
                    else
                    {
                        var portOfEmbark = GetPortByCode(PortOfEmbarkation);
                        if (portOfEmbark != null)
                        {
                            pax.PortOfEmbarkationId = portOfEmbark.LocationId;
                            portDictionairy.Add(PortOfEmbarkation, portOfEmbark.LocationId);
                        }
                    }
                }
                if (!string.IsNullOrWhiteSpace(PortOfDebarkation))
                {
                    if (portDictionairy.ContainsKey(PortOfDebarkation))
                    {
                        pax.PortOfDisembarkationId = portDictionairy.GetValueOrDefault(PortOfDebarkation);
                    }
                    else
                    {
                        var portOfDebarkation = GetPortByCode(PortOfEmbarkation);
                        if (PortOfDebarkation != null)
                        {
                            pax.PortOfDisembarkationId = portOfDebarkation.LocationId;
                            portDictionairy.Add(PortOfDebarkation, portOfDebarkation.LocationId);
                        }
                    }
                }
                if (!string.IsNullOrWhiteSpace(VisaNumber))
                {
                    var idDocument = pax.IdentityDocument.FirstOrDefault();
                    if (idDocument != null)
                        idDocument.VisaOrResidencePermitNumber = VisaNumber;

                }
                if (!string.IsNullOrWhiteSpace(PlaceOfBirth))
                {
                    pax.PlaceOfBirth = PlaceOfBirth;
                }
                if (!string.IsNullOrWhiteSpace(TransitPax))
                {
                    pax.InTransit = ConvertToTransitPax(TransitPax);
                }

                var errors = validator.ValidatePersonOnBoardSpreadSheetModel(pax);

                pax.Errors = errors;
                pax.ErrorMessages = validator.ConvertErrorsToMsg(errors);
                pax.ExcelRowNum = rowNum;
                pax.SequenceNumber = sequenceNo;
                pax.IsPax = true;
                sequenceNo++;

                paxList.Add(pax);
            }

            return paxList;
        }
        private List<PersonOnBoard> ConvertToCrew(ExcelWorksheet worksheet, CrewSheet sheetDefinition, int crewTypeId, int portCallId)
        {
            var crewList = new List<PersonOnBoard>();
            var validator = new PersonOnBoardSpreadSheetValidator();
            var identityType = _context.IdentityDocumentType.Where(idt => idt.EnumValue == IDENTITY_DOCUMENT_TYPES.PASSPORT.ToString()).FirstOrDefault();
            var sequenceNo = 0;
            var genders = _context.Gender.ToList();
            var portDictionairy = new Dictionary<string, int>();
            var countriesDictionairy = new Dictionary<string, int>();
            var captain = true;
            for (var rowNum = sheetDefinition.startRow; rowNum <= worksheet.Dimension.End.Row; rowNum++)
            {
                var row = worksheet.Cells[string.Format("{0}:{0}", rowNum)];

                var LastName = worksheet.Cells[rowNum, sheetDefinition.LastNameAddress].Text;
                var FirstName = worksheet.Cells[rowNum, sheetDefinition.FirstNameAddress].Text + " " + worksheet.Cells[rowNum, sheetDefinition.MiddleNameAddress].Text;
                var Nationality = worksheet.Cells[rowNum, sheetDefinition.NationalityAddress].Text;
                var Sex = worksheet.Cells[rowNum, sheetDefinition.SexAddress].Text;
                var DateOfBirth = worksheet.Cells[rowNum, sheetDefinition.DateOfBirthAddress].Text;
                var DocumentNumber = worksheet.Cells[rowNum, sheetDefinition.DocumentNumberAddress].Text;
                var CountryOfIssue = worksheet.Cells[rowNum, sheetDefinition.CountryOfIssueAddress].Text;
                var DateOfExpiry = worksheet.Cells[rowNum, sheetDefinition.DateOfExpiryAddress].Text;
                var PortOfEmbarkation = worksheet.Cells[rowNum, sheetDefinition.PortOfEmbarkAddress].Text;
                var PortOfDebarkation = worksheet.Cells[rowNum, sheetDefinition.PortOfDebarkAddress].Text;
                var RankOrRating = worksheet.Cells[rowNum, sheetDefinition.RankOrRatingAddress].Text;
                var PlaceOfBirth = worksheet.Cells[rowNum, sheetDefinition.PlaceOfBirthAddress].Text;
                var Effects = worksheet.Cells[rowNum, sheetDefinition.EffectsCustomsAddress].Text;

                Regex rgx = new Regex("[^a-zA-Z0-9 -]");

                FirstName = FirstName.TrimEnd();
                LastName = rgx.Replace(LastName, "");
                FirstName = rgx.Replace(FirstName, "");

                if (string.IsNullOrWhiteSpace(LastName) && string.IsNullOrWhiteSpace(FirstName))
                    continue;

                Nationality = rgx.Replace(Nationality, "");
                Sex = rgx.Replace(Sex, "");
                DocumentNumber = rgx.Replace(DocumentNumber, "");
                CountryOfIssue = rgx.Replace(CountryOfIssue, "");
                PortOfEmbarkation = rgx.Replace(PortOfEmbarkation, "");
                PortOfDebarkation = rgx.Replace(PortOfDebarkation, "");
                RankOrRating = rgx.Replace(RankOrRating, "");
                PlaceOfBirth = rgx.Replace(PlaceOfBirth, "");
                Effects = rgx.Replace(Effects, "");


                var crew = new PersonOnBoard
                {
                    FamilyName = LastName,
                    GivenName = FirstName,
                    PersonOnBoardTypeId = crewTypeId,
                    PortCallId = portCallId,
                    IsCaptain = captain
                };
                captain = false;

                if (!string.IsNullOrWhiteSpace(Nationality))
                {
                    if (countriesDictionairy.ContainsKey(Nationality))
                    {
                        crew.NationalityId = countriesDictionairy.GetValueOrDefault(Nationality);
                    }
                    else
                    {
                        var nationality = GetCountryByThreeCharCode(Nationality);
                        if (nationality != null)
                        {
                            crew.NationalityId = nationality.CountryId;
                            countriesDictionairy.Add(Nationality, nationality.CountryId);
                        }
                    }
                }
                if (!string.IsNullOrWhiteSpace(Sex))
                {
                    var genderEnum = ConvertToGender(Sex);
                    var gender = genders.FirstOrDefault(g => g.EnumValue == genderEnum.ToString());

                    if (gender == null)
                        gender = genders.FirstOrDefault(g => g.EnumValue == GENDER_TYPES.OTHER.ToString());

                    crew.GenderId = gender.GenderId;
                }
                if (!string.IsNullOrWhiteSpace(DateOfBirth))
                {
                    crew.DateOfBirth = ConvertToDatetime(DateOfBirth);
                }
                if (!string.IsNullOrWhiteSpace(DocumentNumber) || !string.IsNullOrWhiteSpace(CountryOfIssue) || !string.IsNullOrWhiteSpace(DateOfExpiry))
                {

                    var expiryDate = ConvertToDatetime(DateOfExpiry);

                    if (identityType != null)
                    {
                        var identityDocument = new IdentityDocument
                        {
                            IdentityDocumentNumber = DocumentNumber,
                            IdentityDocumentExpiryDate = expiryDate,
                            IdentityDocumentType = identityType
                        };

                        if (countriesDictionairy.ContainsKey(CountryOfIssue))
                        {
                            identityDocument.IssuingNationId = countriesDictionairy.GetValueOrDefault(CountryOfIssue);
                        }
                        else
                        {
                            var issuingNation = GetCountryByThreeCharCode(CountryOfIssue);
                            if (issuingNation != null)
                            {
                                identityDocument.IssuingNationId = issuingNation.CountryId;
                                countriesDictionairy.Add(CountryOfIssue, issuingNation.CountryId);
                            }
                        }

                        crew.IdentityDocument = new List<IdentityDocument>
                        {
                            identityDocument
                        };
                    }
                }

                if (!string.IsNullOrWhiteSpace(PortOfEmbarkation))
                {
                    if (portDictionairy.ContainsKey(PortOfEmbarkation))
                    {
                        crew.PortOfEmbarkationId = portDictionairy.GetValueOrDefault(PortOfEmbarkation);
                    }
                    else
                    {
                        var portOfEmbark = GetPortByCode(PortOfEmbarkation);
                        if (portOfEmbark != null)
                        {
                            crew.PortOfEmbarkationId = portOfEmbark.LocationId;
                            portDictionairy.Add(PortOfEmbarkation, portOfEmbark.LocationId);
                        }
                    }
                }
                if (!string.IsNullOrWhiteSpace(PortOfDebarkation))
                {
                    if (portDictionairy.ContainsKey(PortOfDebarkation))
                    {
                        crew.PortOfDisembarkationId = portDictionairy.GetValueOrDefault(PortOfDebarkation);
                    }
                    else
                    {
                        var portOfDebarkation = GetPortByCode(PortOfEmbarkation);
                        if (portOfDebarkation != null)
                        {
                            crew.PortOfDisembarkationId = portOfDebarkation.LocationId;
                            portDictionairy.Add(PortOfDebarkation, portOfDebarkation.LocationId);
                        }
                    }
                }
                if (!string.IsNullOrWhiteSpace(PlaceOfBirth))
                {
                    crew.PlaceOfBirth = PlaceOfBirth;
                }
                if (!string.IsNullOrWhiteSpace(RankOrRating))
                {
                    crew.RankName = RankOrRating;
                }
                if (!string.IsNullOrWhiteSpace(Effects))
                {
                    crew.CrewEffects = Effects;
                }

                var errors = validator.ValidatePersonOnBoardSpreadSheetModel(crew);
                crew.Errors = errors;
                crew.ExcelRowNum = rowNum;
                crew.ErrorMessages = validator.ConvertErrorsToMsg(errors);
                crew.SequenceNumber = sequenceNo;
                crew.IsPax = false;

                sequenceNo++;

                crewList.Add(crew);
            }
            return crewList;
        }
        private List<FalShipStores> ConvertToShipStores(ExcelWorksheet worksheet, ShipStoresSheet sheetDefinition, int portCallId)
        {
            var shipStoreList = new List<FalShipStores>();
            var sequenceNo = 1;
            var validator = new ShipStoresSpreadSheetValidator();
            var measurementTypes = new Dictionary<string, int>();
            _context.MeasurementType.ToList().ForEach(x =>
           {
               measurementTypes.Add(x.Name.Split('(', ')')[1], x.MeasurementTypeId);
           });
            try
            {
                for (var rowNum = sheetDefinition.startRow; rowNum <= worksheet.Dimension.End.Row; rowNum++)
                {
                    var NameOfArticle = worksheet.Cells[rowNum, sheetDefinition.NameOfArticleAddress].Text;
                    var QuantityTxt = worksheet.Cells[rowNum, sheetDefinition.QuantityAddress].Text;
                    var LocationOnBoard = worksheet.Cells[rowNum, sheetDefinition.LocationOnBoardAddress].Text;
                    var MeasurementType = worksheet.Cells[rowNum, sheetDefinition.MeasurementTypeAddress].Text;

                    if (string.IsNullOrWhiteSpace(NameOfArticle) && string.IsNullOrWhiteSpace(QuantityTxt) && string.IsNullOrWhiteSpace(LocationOnBoard))
                        continue;

                    QuantityTxt = QuantityTxt.Replace(",", ".");

                    float.TryParse(QuantityTxt, NumberStyles.Any, CultureInfo.InvariantCulture, out var Quantity);


                    var shipStore = new FalShipStores
                    {
                        SequenceNumber = sequenceNo,
                        LocationOnBoard = LocationOnBoard,
                        ArticleName = NameOfArticle,
                        Quantity = Quantity,
                        PortCallId = portCallId,
                    };

                    if (!string.IsNullOrWhiteSpace(MeasurementType))
                    {
                        if (measurementTypes.TryGetValue(MeasurementType.Split('(', ')')[1], out var measurementTypeId))
                        {
                            shipStore.MeasurementTypeId = measurementTypeId;
                        };
                    }

                    var errors = validator.ValidateShipStoreSpreadsheetModel(shipStore);
                    var errorMsgs = validator.ConvertErrorsToMsg(errors);

                    shipStore.Errors = errors;
                    shipStore.ExcelRowNum = rowNum;
                    shipStore.ErrorMessages = errorMsgs;

                    shipStoreList.Add(shipStore);
                    sequenceNo++;
                }
                return shipStoreList;
            }
            catch (Exception ex)
            {

            }
            return shipStoreList;
        }

        private Country GetCountryByThreeCharCode(string threeCharCode)
        {
            var country = _context.Country.Where(c => c.ThreeCharCode.ToUpper() == threeCharCode.ToUpper()).FirstOrDefault();

            return country;
        }

        private Location GetPortByCode(string portCode)
        {
            var port = _context.Location.Where(l => l.LocationType.EnumValue == LOCATION_TYPES.HARBOUR.ToString()
                                        && l.LocationCode == portCode)
                                        .Include(l => l.LocationType)
                                        .Include(l => l.Country)
                                        .FirstOrDefault();

            return port;
        }

    }
}
