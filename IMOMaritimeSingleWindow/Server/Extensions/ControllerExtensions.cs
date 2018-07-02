using System.Security.Claims;
using IMOMaritimeSingleWindow.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace IMOMaritimeSingleWindow.Extensions
{
    public static class ControllerExtensions
    {
        public static string GetControllerName(this Controller controller)
        {
             return controller.ControllerContext.RouteData.Values["controller"]
                .ToString().ToLower();
        }

        public static string GetActionName(this Controller controller)
        {
            return controller.ControllerContext.RouteData.Values["action"]
                .ToString();
        }

        public static string GetUserId(this Controller controller)
        {
            return controller.User.FindFirstValue(Constants.Strings.JwtClaimIdentifiers.Id);
        }

        public static string GetUserRoleName(this Controller controller)
        {
            return controller.User.FindFirstValue(Constants.Strings.JwtClaimIdentifiers.Rol);
        }
    }
}
