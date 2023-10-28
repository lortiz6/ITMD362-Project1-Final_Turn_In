function validateEmail(input) {
  const email = input.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const errorElement = document.getElementById('email-error');

  if (!email.match(emailPattern)) {
    errorElement.textContent = 'Please enter a valid email address';
  } else {
    errorElement.textContent = '';
  }
}

const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
});
