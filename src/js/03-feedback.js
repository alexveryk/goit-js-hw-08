import throttle from 'lodash.throttle';

const FEDBACK_FORM = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
const subbmit = document.querySelector('button[type="submit"]');
feedbackForm.addEventListener('input', throttle(inputType, 500));
feedbackForm.addEventListener('submit', onSubmit);
subbmit.disabled = true;
savinFormData();

function inputType() {
  const form = {
    email: feedbackForm.email.value,
    message: feedbackForm.message.value,
  };

  if (feedbackForm.email.value && feedbackForm.message.value) {
    subbmit.disabled = false;
  } else {
    subbmit.disabled = true;
  }

  localStorage.setItem(FEDBACK_FORM, JSON.stringify(form));
}

function savinFormData() {
  const getForm = JSON.parse(localStorage.getItem(FEDBACK_FORM));

  if (getForm) {
    feedbackForm['email'].value = getForm.email || '';
    feedbackForm['message'].value = getForm.message || '';
  }

  if (feedbackForm.email.value && feedbackForm.message.value) {
    subbmit.disabled = false;
  }
}

function onSubmit(evt) {
  evt.preventDefault();

  const getForm = JSON.parse(localStorage.getItem(FEDBACK_FORM)) || {};
  console.log(getForm);

  evt.target.reset();
  localStorage.removeItem(FEDBACK_FORM);
  subbmit.disabled = true;
}
