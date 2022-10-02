const submit = document.querySelector('#submit');
const nameError = document.querySelector('.nameError');
const subjectError = document.querySelector('.subjectError');
const emailError = document.querySelector('.emailError');
const messageError = document.querySelector('.messageError');

submit.onclick = function (event) {
  event.preventDefault();

  const firstName = document.querySelector('#firstname').value.trim();
  const subject = document.querySelector('#subject').value.trim();
  const email = document.querySelector('#email').value.trim();
  const address = document.querySelector('#address').value.trim();

  if (firstName.length > 0) {
    nameError.classList.add('hide');
    nameError.classList.remove('show');
  } else {
    nameError.classList.add('show');
    nameError.classList.remove('hide');
  }

  if (subject.length >= 10) {
    subjectError.classList.add('hide');
    subjectError.classList.remove('show');
  } else {
    subjectError.classList.add('show');
    subjectError.classList.remove('hide');
  }

  if (validateEmail(email)) {
    emailError.classList.add('hide');
    emailError.classList.remove('show');
  } else {
    emailError.classList.add('show');
    emailError.classList.remove('hide');
  }

  if (text.length > 25) {
    messageError.classList.add('hide');
    messageError.classList.remove('show');
  } else {
    messageError.classList.add('show');
    messageError.classList.remove('hide');
  }
};

function validateEmail(emailAddress) {
  const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const isEmailValid = emailExpression.test(emailAddress);
  return isEmailValid;
}