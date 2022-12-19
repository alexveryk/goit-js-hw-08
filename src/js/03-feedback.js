import throttle from 'lodash.throttle';

const form = {};
const FEDBACK_FORM = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('input', throttle(inputType, 500));
feedbackForm.addEventListener('submit', onSubmit);

function inputType(event) {
  form[event.target.name] = event.target.value;
  localStorage.setItem(FEDBACK_FORM, JSON.stringify(form));
}

function savinFormData() {
  const getForm = JSON.parse(localStorage.getItem(FEDBACK_FORM));

  if (getForm) {
    feedbackForm['email'].value = getForm.email;
    feedbackForm['message'].value = getForm.message;
  }
}
savinFormData();

function onSubmit(evt) {
  evt.preventDefault();

  console.log(form);

  evt.target.reset();
  localStorage.removeItem(FEDBACK_FORM);
}
