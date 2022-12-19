import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('input', throttle(inputType, 500));
feedbackForm.addEventListener('submit', onSubmit);

const form = {};
const FEDBACK_FORM = 'feedback-form-state';

function inputType(event) {
  form[event.target.name] = event.target.value;
  localStorage.setItem(FEDBACK_FORM, JSON.stringify(form));
}

const getForm = JSON.parse(localStorage.getItem(FEDBACK_FORM));

let email = getForm.email || '';
let message = getForm.message || '';

(function () {
  feedbackForm['email'].value = email;
  feedbackForm['message'].value = message;
})();

function onSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();

  console.log(getForm);

  localStorage.clear();
}
