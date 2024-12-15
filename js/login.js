function validateForm(event) {
    event.preventDefault();

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const errorMessage = document.getElementById('error-message');
    const loginButton = document.getElementById('login-button');
    const loadingAnimation = document.getElementById('loading');

    if (username === '' || password === '') {
        errorMessage.innerText = 'Username and password required';
        errorMessage.style.display = 'block';
        return;
    }

    errorMessage.style.display = 'none';

    loginButton.style.display = 'none';
    
    loadingAnimation.style.display = 'flex';

    setTimeout(() => {
        document.querySelector('form').submit();
    }, 3000);
}