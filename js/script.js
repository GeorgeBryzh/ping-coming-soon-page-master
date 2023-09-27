const form = document.querySelector('#novalidate');
const emailInp = document.querySelector('.email');
const emailErrorMessage = document.querySelector('.email-error-message');
const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
function commingSoonFormRedirect(url) {
    window.location.href = url;
}

function tryToSubmit(e) {
    e.preventDefault();
    if (!emailInp.value) {
        console.log('empty');
        emailErrorMessage.innerHTML = 'Whoops! It looks like you forgot to add your email';
        emailErrorMessage.classList.remove('hide');


    }
    else if (!emailInp.value.match(regExp)) {
        console.log('not email')
        emailErrorMessage.classList.remove('hide');
        emailErrorMessage.innerHTML = 'Please provide a valid email address';
    }
    else {
        emailErrorMessage.classList.add('hide');
        commingSoonFormRedirect('https://www.google.com/');
    }
};
form.addEventListener('submit', tryToSubmit);