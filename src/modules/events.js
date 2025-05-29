import { validateInputs } from './validation';

function attachValidation() {
  const validator = validateInputs();

  // Get a reference of email input and put input event
  document
    .querySelector('#mail')
    .addEventListener('input', validator.emailValidator.validateEmail);

  document
    .querySelector('#country')
    .addEventListener('input', validator.countryValidator.validateCountry);
}

export { attachValidation };
