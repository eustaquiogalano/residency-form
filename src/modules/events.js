import { validateInputs } from './validation';

function attachValidation() {
  const validator = validateInputs();

  // Get a reference of email input and put input event
  document
    .querySelector('#mail')
    .addEventListener('input', validator.emailValidator.validateEmail);

  // Get a reference for country input and put input event
  document
    .querySelector('#country')
    .addEventListener('input', validator.countryValidator.validateCountry);

  // Get a reference for postal code input and put input event
  document
    .querySelector('#postal-code')
    .addEventListener(
      'input',
      validator.postalCodeValidator.postalCodeValidate
    );

  // Get a reference for password input and put an input event
  document
    .querySelector('#password')
    .addEventListener('input', validator.passwordValidator.validatePassword);

  // Get a reference for password confirmation input and put an input event
  document
    .querySelector('#password-confirmation')
    .addEventListener(
      'input',
      validator.passwordValidator.validateConfirmPassword
    );

  // Get a reference of the form and put an submit event
  document
    .querySelector('#residency-form')
    .addEventListener('submit', event => {
      validator.submitButton.submitForm(event);
    });
}

export { attachValidation };
