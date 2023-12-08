'use strict'

// Password
document.addEventListener('DOMContentLoaded', function () {
  const eyeIcon = document.querySelector('.open-eye')
  const passwordInput = document.getElementById('password')

  eyeIcon.addEventListener('click', function () {
    eyeIcon.classList.toggle('closed-eye')
    if (eyeIcon.classList.contains('closed-eye')) {
      passwordInput.type = 'text'
      eyeIcon.removeClass('open-eye').addClass('opened-eye.closed-eye')
    } else {
      passwordInput.type = 'password'
    }
  })
})

// Phone Number

// Use let for variables that may be reassigned
let phoneNumberInput = document.querySelectorAll('.input_tel')

// Attach the formatPhoneNumber function to the input event

for (let i = 0; i < phoneNumberInput.length; i++) {
  phoneNumberInput[i].addEventListener('input', function () {
    formatPhoneNumber(phoneNumberInput[i])
  })
}

for (let i = 0; i < phoneNumberInput.length; i++) {
  phoneNumberInput[i].addEventListener('keydown', function (event) {
    handleBackspace(event, phoneNumberInput[i])
  })
}

function formatPhoneNumber(input) {
  // Remove non-numeric characters
  let phoneNumber = input.value.replace(/\D/g, '')

  // Format the remaining digits
  if (phoneNumber.length > 0) {
    // Format the phone number as (yy)xxx-xx-xx
    phoneNumber =
      '(' +
      phoneNumber.substring(0, 2) +
      ')' +
      phoneNumber.substring(2, 5) +
      '-' +
      phoneNumber.substring(5, 7) +
      '-' +
      phoneNumber.substring(7, 9)
  }

  // Set the formatted value back to the input
  input.value = phoneNumber
}

function handleBackspace(event, input) {
  // Check if the pressed key is the backspace key
  if (event.key === 'Backspace') {
    // Remove non-numeric characters
    let phoneNumber = input.value.replace(/\D/g, '')

    // Remove the last digit
    phoneNumber = phoneNumber.slice(0, -1)

    // Format the remaining digits
    if (phoneNumber.length > 0) {
      phoneNumber =
        '(' +
        phoneNumber.substring(0, 2) +
        ')' +
        phoneNumber.substring(2, 5) +
        '-' +
        phoneNumber.substring(5, 7) +
        '-' +
        phoneNumber.substring(7, 9)
    }

    // Set the formatted value back to the input
    input.value = phoneNumber

    // Prevent the default backspace behavior
    event.preventDefault()
  }
}
