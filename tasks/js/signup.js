"use strict";

/*
    signup.js
    Script for the signup.html page
    Handle the form submit and create a new Parse.User() for the new user account
 */

//use jQuery to register a function that is called when the document is ready for manipulation
$(function() {
   $('.form-signup').submit(function(event) {
       event.preventDefault();
       var user = new Parse.User();
       user.set('username', $('#inputEmail').val());
       user.set('password', $('#inputPassword').val());
       user.set('firstName', $('#inputFName').val());
       user.set('lastName', $('#inputLName').val());

       user.signUp().then(function () {
          clearError();
           window.location = 'index.html'; //goes to sign up page after successful login
       }, function(err) {
           showError(err); //passes error object to display error popup if unsuccessful
       });
   }) ;

});