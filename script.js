document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');
  const formSuccess = document.getElementById('formSuccess');

  // Add event listener to handle form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check if the form is valid
    if (form.checkValidity()) {
      // If form is valid, show success message and redirect to thank you page
      formSuccess.classList.remove('d-none'); // Show success message
      setTimeout(() => {
        // Redirect to thank you page after 2 seconds
        window.location.href = 'thankyou.html';
      }, 2000);
    } else {
      // If form is invalid, apply Bootstrap's validation classes
      form.classList.add('was-validated');
    }
  });
});