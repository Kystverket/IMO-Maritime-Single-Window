using FluentValidation;

namespace IMOMaritimeSingleWindow.ViewModels.Validations
{
    public class ResetPasswordViewModelValidator : AbstractValidator<ResetPasswordViewModel>
    {
        public ResetPasswordViewModelValidator()
        {
            RuleFor(vm => vm.UserId).NotEmpty().WithMessage("User id cannot be empty");
            RuleFor(vm => vm.NewPassword).NotEmpty().WithMessage("New password cannot be empty");
            RuleFor(vm => vm.PasswordResetToken).NotEmpty().WithMessage("Password reset token cannot be empty");
        }
    }
}
