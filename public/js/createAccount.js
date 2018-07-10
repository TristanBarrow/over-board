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
    $.post('/user/create', userData, function(response) {
        if (!response.success) {
            err("An unknown error occered contact your system Admin");
        }
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
        window.location = '/login';
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


    $.get('/check-username/' + username, function(usernameExists) {
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


