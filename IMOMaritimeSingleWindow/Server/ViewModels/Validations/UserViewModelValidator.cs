
using FluentValidation;

namespace IMOMaritimeSingleWindow.ViewModels.Validations
{
    public class UserViewModelValidator : AbstractValidator<UserViewModel>
    {
        public UserViewModelValidator()
        {
            RuleFor(viewModel => viewModel.UserName).NotEmpty().WithMessage("Username cannot be empty");
        }
    }
}
