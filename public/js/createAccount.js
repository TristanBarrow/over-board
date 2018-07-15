var err = function(message) {
    $('#error').empty();
    $('#error').append(message);
}

var sendData = function(username, password) {
    var userData = {
        username: username,
        password: password
    };
    console.log(userData);
    $.post('/api/user/create', userData, function(response) {
        if (!response.success) {
            err("An unknown error occered I'm Sorry");
        } else {
            window.location = '/login';
        }
    });
}

var createAccount = function() {
    var username = $('#username').val();
    var password = $('#password').val();
    var verPassword = $('#ver-password').val();

    if (username == '') {
        err('Username is Required');
        return;
    }
    if (password == '') {
       err('Password is Required');
       return;
    };
    if (verPassword == '') {
        err('Verification Password is Required');
        return;
     };


    $.get('/api/user/check/' + username, function(usernameExists) {
        if (usernameExists) {
            err("Username Already Exists");
        } else {
            if (password != verPassword) {
                err('Passwords Dont Match');
            } else {
                sendData(username, password);
            }
        }
    });

}


