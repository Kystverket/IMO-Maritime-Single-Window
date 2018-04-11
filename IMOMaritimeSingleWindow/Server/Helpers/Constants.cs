
namespace IMOMaritimeSingleWindow.Helpers
{
    public static class Constants
    {
        public static class Strings
        {
            public static class JwtClaimIdentifiers
            {
                public const string Rol = "rol", Id = "id";
            }
        
            public static class JwtClaims
            {
                public const string ApiAccess = "api_access";
                public const string AdminAccess = "admin_access";
            }

            public static class PersonClaims
            {
                public const string Register = "register", View = "view", Delete = "delete";
            }

            public static class UserRoles
            {
                public const string Admin = "admin", Agent = "agent";
            }

            public static class MenuEntries
            {
                public const string USERS = "USERS";
                public const string SHIPS = "SHIPS";
                public const string LOCATION = "LOCATIONS";
                public const string COMPANIES = "COMPANIES";
                public const string PORT_CALL = "PORT CALL";
            }

            
        }
        public enum LoginStates
        {
            OK,
            InvalidCredentials,
            LockedOut,
            Requires2FA //To be implemented?
        }
    }
}
