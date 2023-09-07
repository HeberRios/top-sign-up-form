"use strict";

// SELECTING ELEMENTS ----------------------------------------------------
// INPUTS
const form = document.getElementById("sign-up-form")
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
    /^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}[.]{0,1}$/;
const emailRegEx =
    /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)+|\[[\t -Z^-~]*])$/;
const phoneRegEx = /^\(?(\d{3})\)?[\-\ \.]?(\d{3})[\-\ \.]?(\d{4})$/;
const passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!@$%^&*-]).{10,}/;
