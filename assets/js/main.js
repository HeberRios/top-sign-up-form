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
const phoneRegEx = /^\(?(\d{3})\)?[\-\ \.]?(\d{3})[\-\ \.]?(\d{4})$/;
const passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!@$%^&*-]).{10,}/;

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

// INPUT VALIDATIONS
firstName.addEventListener("input", FirstNameValidation);

lastName.addEventListener("input", lastNameValidation);
