const $input = document.getElementById('form-email')
const $error = document.getElementById('error-message')

function toggleVisibility  ($input)  {
$input.preventDefault();  
if (!$input.originalTarget.value) {
  $error.innerHTML = "Oops! Please add your email"
}
else {
  $error.innerHTML = "Oops! Please check your email"
}
$error.classList?.add("show-error")
};

$input.addEventListener('invalid', toggleVisibility);
