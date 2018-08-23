namespace IMOMaritimeSingleWindow.Helpers
{
    public class EmailResult
    {
        public bool Succeeded { get; private set; }
        public static EmailResult Success { get; } = new EmailResult { Succeeded = true };
        public static EmailResult Failed()
        {
            return new EmailResult { Succeeded = false };
        }

        public override string ToString() => Succeeded ? "Succeeded" : "Failed";
    }
}
