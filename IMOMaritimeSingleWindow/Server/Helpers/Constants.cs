
namespace IMOMaritimeSingleWindow.Helpers
{
    public static class Constants
    {
        public static class Integers
        {
            public static class DatabaseTableIds {
                public const int ORGANIZATION_TYPE_GOVERNMENT_AGENCY = 1;
                public const int ORGANIZATION_TYPE_COMPANY = 2;
                public const int OTHER_PURPOSE_ID = 100249;
                public const int PORT_CALL_STATUS_ACTUAL = 100232;
                public const int PORT_CALL_STATUS_CANCELLED = 100233;
                public const int PORT_CALL_STATUS_EXECUTED = 100234;
                public const int PORT_CALL_STATUS_INCOMPLETE = 100235;
            }
        }
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
