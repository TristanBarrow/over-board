var login = function() {
    var data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
    var success = function() {
        
    }
    $.post('/api/login', data, success, 'json');
}