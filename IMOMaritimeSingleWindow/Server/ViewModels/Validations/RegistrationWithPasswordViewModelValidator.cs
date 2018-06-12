
using FluentValidation;
 

namespace IMOMaritimeSingleWindow.ViewModels.Validations
{
    public class RegistrationWithPasswordViewModelValidator : AbstractValidator<RegistrationWithPasswordViewModel>
    {
        public RegistrationWithPasswordViewModelValidator()
        {
            RuleFor(vm => vm.Email).NotEmpty().WithMessage("Email cannot be empty");
            RuleFor(vm => vm.Password).NotEmpty().WithMessage("Password cannot be empty");
            //RuleFor(vm => vm.Password).Length(6, 20).WithMessage("Password must be between 6 and 20 characters of length.");
            //RuleFor(vm => vm.GivenName).NotEmpty().WithMessage("GivenName cannot be empty");
            //RuleFor(vm => vm.Surname).NotEmpty().WithMessage("Surname cannot be empty");
            RuleFor(vm => vm.RoleName).NotEmpty().WithMessage("RoleName cannot be empty");
            RuleFor(vm => vm.OrganizationId).NotEmpty().WithMessage("OrganizationId cannot be empty");
        }
    }
}
