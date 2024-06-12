

const myForm = document.querySelector('#my-form');
const userInput = document.querySelector ('#user');
const passwordInput = document.querySelector ('#password');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) 
{
    e.preventDefault();

    if(userInput.value === '' || passwordInput.value === '') 
    {
        alert('Please enter fields.');
    } 
    else 
    {
        alert('WRONG INFORMATION. GET OUT')
    }
     if(userInput.value === 'F0rgiver' || passwordInput.value === 'SEEKINGPARADISE') 
    {

        window.location.assign('page.html')
    } 
}