import { validateInputs } from './validation';

function attachValidation() {
  const validator = validateInputs();
  document
    .querySelector('#mail')
    .addEventListener('input', validator.emailValidator.validateEmail);
}

export { attachValidation };
