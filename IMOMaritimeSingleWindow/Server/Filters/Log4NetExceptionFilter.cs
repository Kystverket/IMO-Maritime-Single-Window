using log4net;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Filters
{
    public class Log4NetExceptionFilter : IExceptionFilter
    {
        static readonly ILog Logger = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        public void OnException(ExceptionContext context)
        {
            Exception ex = context.Exception;
            Logger.Error(ex);
            if (ex.InnerException != null)
            {
                Logger.Error(ex.InnerException);
            }
            Logger.Debug("--- Begin debug information for previous error ---");
            if (context.HttpContext.Request.Path.HasValue)
            {
                Logger.Debug("Path: " + context.HttpContext.Request.Path.Value);
            }
            if (context.HttpContext.Request.QueryString.HasValue)
            {
                Logger.Debug("Query string: " + context.HttpContext.Request.QueryString.Value);
            }
            Logger.Debug("Headers:\r\n" + JsonConvert.SerializeObject(context.HttpContext.Request.Headers));
            Logger.Debug("Cookies:\r\n" + JsonConvert.SerializeObject(context.HttpContext.Request.Cookies));
            try
            {
                if (context.HttpContext.Request.Body != null)
                {
                    var reader = new StreamReader(context.HttpContext.Request.Body);
                    Logger.Debug("Body:\r\n" + reader.ReadToEnd());
                }
            }
            catch(Exception lol)
            {
                Logger.Error(lol);
            }
            Logger.Debug("--- End debug information for previous error ---");
        }
    }
}
