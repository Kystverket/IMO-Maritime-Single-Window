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
    }
}
