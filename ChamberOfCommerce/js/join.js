
// Join

const signup = document.querySelector('.signup')
const showform = document.querySelector('.showform')

signup.addEventListener('click', e => {
    e.preventDefault();
    showform.style.display = 'block';
})