document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (validateForm(username, password)) {
            alert('Login successful');
            window.location.href = 'HomepageP.html';
        } else {
            alert('Invalid username or password');
        }
    });
});

function validateForm(username, password) {
    if (username === 'FEU' && password === 'FEUTECH') {
        return true;
    }
    return false;
}
