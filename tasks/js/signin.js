"use strict";

/*
    signin.js
    Script for the signin.html page
    Handle the form submit and use Parse.User.logIn() to start an authenticated session
*/

//use jQuery to register a function that is called when the document is ready for manipulation
$(function() {
    $('.form-signin').submit(function(event) {
        event.preventDefault();
        var email = $('#inputEmail').val();
        var password = $('#inputPassword').val();
        Parse.User.logIn(email, password).then(function () {
            window.location = 'index.html';   // on success
        }, function(err) {
            showError(err); //function activates during error
        });
    });
});