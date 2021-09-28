const $input = document.getElementById('form-email')
const $error = document.getElementById('error-message')

function toggleVisibility  ($input)  {
    $input.preventDefault();  
     $error.classList?.add("show-error")
   console.log($error)
} 
$input.addEventListener('invalid', toggleVisibility)



