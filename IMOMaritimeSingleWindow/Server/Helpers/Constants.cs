
using System;

namespace IMOMaritimeSingleWindow.Helpers
{
    public static class Constants
    {
        public static class Integers
        {
            public static class DatabaseTableIds 
            {
                public const int ORGANIZATION_TYPE_GOVERNMENT_AGENCY = 1;
                public const int ORGANIZATION_TYPE_COMPANY = 2;
                public const int OTHER_PURPOSE_ID = 100249;
                public const int PORT_CALL_STATUS_ACTUAL = 100232;
                public const int PORT_CALL_STATUS_CANCELLED = 100233;
                public const int PORT_CALL_STATUS_EXECUTED = 100234;
                public const int PORT_CALL_STATUS_INCOMPLETE = 100235;
            }
        }

        public static class Guids
        {
            public const string CLAIM_TYPE_PORT_CALL_GUID = "5ce3757c-23a9-45ce-b68a-b6c7f06c7c2c";
            public const string CLAIM_TYPE_MENU_GUID = "99ce0e81-867b-467d-a1a8-a098feb2b77b";
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
