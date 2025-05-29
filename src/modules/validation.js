const emailInput = document.querySelector('#mail');
const countryInput = document.querySelector('#country');
const postalCodeInput = document.querySelector('#postal-code');

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

  // This object contains a validator for country input
  const countryValidator = {
    validateCountry() {
      // Clear previous error message
      countryInput.setCustomValidity('');

      if (countryInput.validity.valueMissing) {
        // If input is empty set this message
        countryInput.setCustomValidity('Please fill out with a valid country');
      } else if (countryInput.value.length < 4) {
        // if input has less than 4 characters set this one
        countryInput.setCustomValidity(
          'There is no country with less than 4 characters'
        );
      } else {
        // Else, seterror message just blank
        countryInput.setCustomValidity('');
      }

      // Then report the error custom message
      countryInput.reportValidity();
    },
  };

  // THis object contains a validator for postal code input
  const postalCodeValidator = {
    postalCodeValidate() {
      // Reset previous error message
      postalCodeInput.setCustomValidity('');

      if (postalCodeInput.validity.valueMissing) {
        // If postal code input is empty
        // set this as error message
        postalCodeInput.setCustomValidity(
          'Please fill out with valid postal code'
        );
      } else if (!/^\d{4}$/.test(postalCodeInput.value)) {
        // If postal code input is not a 4 digit value
        // set this as error message
        postalCodeInput.setCustomValidity('Enter a valid postal code');
      } else {
        // If value is valid good to go
        postalCodeInput.setCustomValidity('');
      }

      // Then report the custom error message
      postalCodeInput.reportValidity();
    },
  };

  return { emailValidator, countryValidator, postalCodeValidator };
}

export { validateInputs };
