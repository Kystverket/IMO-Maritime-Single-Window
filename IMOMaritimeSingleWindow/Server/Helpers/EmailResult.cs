namespace IMOMaritimeSingleWindow.Helpers
{
    public class EmailResult
    {
        public EmailResult() { }
        public bool Succeeded { get; private set; }
        public static EmailResult Success { get; }
        //public static EmailResult Success { get { return new EmailResult(); } }
        public static EmailResult Failed()
        {
            return new EmailResult() { Succeeded = false };
        }
        public override string ToString()
        {
            var message = Succeeded ? "Succeeded" : "Failed";
            return message;
        }
    }
}
