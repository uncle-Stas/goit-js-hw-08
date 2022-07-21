import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

const complitedForm = {};

feedbackForm.addEventListener(
  'input',
  throttle(event => {
    if (event.target.name === 'email') {
      complitedForm.email = event.target.value;
    }

    if (event.target.name === 'message') {
      complitedForm.message = event.target.value;
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(complitedForm));
  }, 500)
);

const feedbackInputEmail = feedbackForm.querySelector('input');
const feedbackTextAria = feedbackForm.querySelector('textarea');

if (localStorage.getItem('feedback-form-state') !== null) {
  const feedbackFormState = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  feedbackInputEmail.value = feedbackFormState.email;
  feedbackTextAria.value = feedbackFormState.message;
}

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const feedbackFormState = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  console.log('complited form ', feedbackFormState);

  feedbackInputEmail.value = '';
  feedbackTextAria.value = '';

  localStorage.clear();
});
