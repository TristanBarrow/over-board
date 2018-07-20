var err = function(message) {
    $('#error').empty();
    $('#error').append(message);
}

var login = function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username == '') {
        err('Username is Required');
        return;
    }
    if (password = '') {
        err('Password is Required');
        return;
    }
    var data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
    console.log(data);
    var success = function(data) {
        console.log(data);
        if (data.success) {
            window.location = '/home';
        } else {
            err('Incorrect Username or Password');
        }
    }
    $.post('/api/user/login', data, success, 'json');
}

window.onkeydown = function(e) {
    if (document.activeElement.id == 'login-button') {
        $('#login-button').click();
    }
};