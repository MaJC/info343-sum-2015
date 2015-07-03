"use strict";

//initialize Parse library with your application ID and your app's JavaScript library key
Parse.initialize('dwXU0Ohb3gZKQSEKF5ueiMVkegy9sgkzHJKrJPy6', 'sTLG8gmU7atMSmoFYEY8ld6jD9ZfjYp0sEo9TESu');

/**
 * Shows an error in an element on the page with the class 'error-message'
 * @param err {Object} the error to be shown
 */
function showError(err) {
    $('.error-message').html(err.message).fadeIn();
}

/**
 * Clears any currently showing error
 */
function clearError() {
    $('.error-message').fadeOut().empty();
}
