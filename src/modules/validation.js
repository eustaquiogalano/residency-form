const emailInput = document.querySelector('#mail');

function validateInputs() {
  // This object contains a validator for email input
  const emailValidator = {
    validateEmail() {
      // Clear previous error message
      emailInput.setCustomValidity('');

      // Check for a specific error and set a custom
      // error for that specific error
      if (emailInput.validity.typeMismatch) {
        // Set this as the erro message if the entered
        // value is not an email
        emailInput.setCustomValidity('Enter a valid email');
      } else if (emailInput.validity.valueMissing) {
        // Set this one if input is empty
        emailInput.setCustomValidity('Please fill out the field with an email');
      }

      // Then report the custom error message
      emailInput.reportValidity();
    },
  };

  return { emailValidator };
}

export { validateInputs };
