var login = function() {
    var data = {

    }
    var success = function() {

    }
    $.post('/api/login', data, success, 'json');
}