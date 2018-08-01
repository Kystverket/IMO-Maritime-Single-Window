using FluentValidation;

namespace IMOMaritimeSingleWindow.ViewModels.Validations
{
    public class ChangePasswordViewModelValidator : AbstractValidator<ChangePasswordViewModel>
    {
        public ChangePasswordViewModelValidator()
        {
            RuleFor(vm => vm.CurrentPassword).NotEmpty().WithMessage("Username cannot be empty");
            RuleFor(vm => vm.NewPassword).NotEmpty().WithMessage("New password cannot be empty");
        }
    }
}
