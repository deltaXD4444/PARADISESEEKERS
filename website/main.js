const userInput = document.querySelector ('#user');
const passwordInput = document.querySelector ('#password');

form.addEventListener('submit', onSubmit);

function onSubmit(e) 
{
    e.preventDefault();

    if(userInput.value === '' || passwordInput.value === '') 
    {
        alert('Please enter fields.');
    } 
    else 
    {
        console.log('success');
    }
}
