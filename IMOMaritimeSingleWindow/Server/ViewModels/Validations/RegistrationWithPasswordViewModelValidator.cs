
using FluentValidation;
 

namespace IMOMaritimeSingleWindow.ViewModels.Validations
{
    public class RegistrationWithPasswordViewModelValidator : AbstractValidator<RegistrationWithPasswordViewModel>
    {
        public RegistrationWithPasswordViewModelValidator()
        {
            RuleFor(vm => vm.Email).NotEmpty().WithMessage("Email cannot be empty");
            RuleFor(vm => vm.Password).NotEmpty().WithMessage("Password cannot be empty");
            RuleFor(vm => vm.Password).Length(6, 20).WithMessage("Password must be between 6 and 20 characters of length.");
            RuleFor(vm => vm.FirstName).NotEmpty().WithMessage("FirstName cannot be empty");
            RuleFor(vm => vm.LastName).NotEmpty().WithMessage("LastName cannot be empty");
        }
    }
}
