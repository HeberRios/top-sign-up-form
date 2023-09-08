"use strict";

// SELECTING ELEMENTS ----------------------------------------------------
// INPUTS
const form = document.getElementById("sign-up-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submitBtn = document.getElementById("submit-btn");

// ERROR MESSAGE SPANS
const firstNameError = firstName.nextElementSibling;
const lastNameError = lastName.nextElementSibling;
const emailError = email.nextElementSibling;
const phoneError = phone.nextElementSibling;
const passwordError = password.nextElementSibling;
const confirmPasswordError = confirmPassword.nextElementSibling;

// REGEX VARIABLES
const nameRegEx =
    /^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,}[.]{0,1}$/;
const emailRegEx =
    /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)+|\[[\t -Z^-~]*])$/;
const phoneRegEx = /^(\d{3})[\-]?(\d{3})[\-]?(\d{4})$/;
const passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!@$%^&*-]).{14,}/;

// FUNCTIONS -------------------------------------------------------------

function FirstNameValidation() {
    if (nameRegEx.test(firstName.value)) {
        if (firstName.value.length > 0 && firstName.value.length <= 31) {
            firstName.classList.remove("invalid");
            firstNameError.textContent = "OK";
            firstNameError.classList.remove("active");
        } else {
            firstName.classList.add("invalid");
            firstNameError.textContent =
                "* First name has to be at maximum 31 characters.";
            firstNameError.classList.add("active");
        }
    } else {
        firstName.classList.add("invalid");
        firstNameError.textContent = "* Invalid first name.";
        firstNameError.classList.add("active");
    }
}

function lastNameValidation() {
    if (nameRegEx.test(lastName.value)) {
        if (lastName.value.length > 0 && lastName.value.length <= 31) {
            lastName.classList.remove("invalid");
            lastNameError.textContent = "OK";
            lastNameError.classList.remove("active");
        } else {
            lastName.classList.add("invalid");
            lastNameError.textContent =
                "* Last name has to be at maximum 31 characters.";
            lastNameError.classList.add("active");
        }
    } else {
        lastName.classList.add("invalid");
        lastNameError.textContent = "* Invalid last name.";
        lastNameError.classList.add("active");
    }
}

function emailValidation() {
    if (emailRegEx.test(email.value)) {
        email.classList.remove("invalid");
        emailError.textContent = "OK";
        emailError.classList.remove("active");
    } else {
        email.classList.add("invalid");
        emailError.textContent = "* Invalid email address.";
        emailError.classList.add("active");
    }
}

function phoneValidation() {
    if (phoneRegEx.test(phone.value)) {
        phone.classList.remove("invalid");
        phoneError.textContent = "OK";
        phoneError.classList.remove("active");
        console.log("help");
    } else {
        phone.classList.add("invalid");
        phoneError.textContent =
            "* Accepted formats: 123-456-7891 or 1234567891";
        phoneError.classList.add("active");
        // console.log("help");
    }
}

function passwordValidation() {
    if (passwordRegEx.test(password.value)) {
        password.classList.remove("invalid");
        passwordError.textContent = "OK";
        passwordError.classList.remove("active");
    } else {
        password.classList.add("invalid");
        passwordError.textContent =
            "* Password must have: uppercase letters, numbers, special characters (#?!@$%^&*-) and be 14 characters";
        passwordError.classList.add("active");
    }
}

function confirmPasswordValidation() {
    if (confirmPassword.value === password.value) {
        confirmPassword.classList.remove("invalid");
        confirmPasswordError.textContent = "OK";
        confirmPasswordError.classList.remove("active");
    } else {
        confirmPassword.classList.add("invalid");
        confirmPasswordError.textContent = "* Passwords does not match.";
        confirmPasswordError.classList.add("active");
    }
}

// INPUT VALIDATIONS
firstName.addEventListener("input", FirstNameValidation);

lastName.addEventListener("input", lastNameValidation);

email.addEventListener("input", emailValidation);

phone.addEventListener("input", phoneValidation);

password.addEventListener("input", passwordValidation);

confirmPassword.addEventListener("input", confirmPasswordValidation);
