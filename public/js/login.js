var err = function(message) {
    $('#error').empty();
    $('#error').append(message);
}

var login = function() {
    var data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
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