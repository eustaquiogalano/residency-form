const emailInput = document.querySelector('#mail');
const countryInput = document.querySelector('#country');
const postalCodeInput = document.querySelector('#postal-code');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#password-confirmation');
const residencyForm = document.querySelector('#residency-form');

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

  // This object contains a validator for password input
  const passwordValidator = {
    validatePassword() {
      // password must at least contain:
      // 1 special character
      // 1 number
      // 1 uppercase letter
      const regexPattern =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/;

      // Reset precious error message
      passwordInput.setCustomValidity('');

      // Validate the input
      if (passwordInput.validity.valueMissing) {
        // if input is empty
        // set this error message
        passwordInput.setCustomValidity('Please fill out with a password');
      } else if (passwordInput.validity.tooShort) {
        // if input has less than 8 characters
        // set this error message
        passwordInput.setCustomValidity('Password is too short');
      } else if (!regexPattern.test(passwordInput.value)) {
        // if input has no
        // 1 special character
        // 1 number
        // 1 uppercase letter
        // set this error message
        passwordInput.setCustomValidity(
          'At least: 1 uppercase letter, 1 special character, 1 number'
        );
      } else {
        // if input is all good
        passwordInput.setCustomValidity('');
      }

      // Then report the error message
      passwordInput.reportValidity();
    },

    validateConfirmPassword() {
      // Reset previous error message
      confirmPasswordInput.setCustomValidity('');

      // Validate the password confirmation input
      if (confirmPasswordInput.validity.valueMissing) {
        // if input is empty
        // set this error message
        confirmPasswordInput.setCustomValidity(
          'Please enter a matching password'
        );
      } else if (!(passwordInput.value === confirmPasswordInput.value)) {
        // if input does not match
        // set this error message
        confirmPasswordInput.setCustomValidity('Password does not match');
      } else {
        // if all is good
        confirmPasswordInput.setCustomValidity('');
      }

      // Then report the error
      confirmPasswordInput.reportValidity();
    },
  };

  // This ob ject contains a form validation and submission method
  const submitButton = {
    submitForm(event) {
      // For practice purposes, no need for submission
      event.preventDefault();

      // validate the form
      if (residencyForm.checkValidity()) {
        // If every input are valid inform the user
        console.log('High Five everything is all good');

        // And reset all the input
        emailInput.value = '';
        countryInput.value = '';
        postalCodeInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
      } else {
        // if not then inform the user
        console.log('Check your inputs');

        // and report the invalid input element
        residencyForm.reportValidity();
      }
    },
  };

  return {
    emailValidator,
    countryValidator,
    postalCodeValidator,
    passwordValidator,
    submitButton,
  };
}

export { validateInputs };
