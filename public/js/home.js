
var getMe = function(callback) {
    $.get('/api/me', (data) => {
        callback(data.username);
    })
}

var div = function(content, classType, onclick) {
    var node = document.createElement("DIV");
    node.classList.add(classType);

    if (typeof onclick != 'undefined'){
        node.onclick = function() { onclick(content); }
    }
    node.appendChild(content);
    return node;
}

var requestBoardTricks = function(name) {
    var body = document.getElementById('body');
    while(body.firstChild){
        // TODO actually request stuff
        body.removeChild(body.firstChild);
    }

    $.get('/api/board/tricks/' + abr(name), function(data) {
        data.forEach(function(e) {
            var profs = document.createElement('div');
            var textnode = document.createTextNode(name);
            profs.appendChild(textnode);
            for (var i = 0; i < 5; i++) {
                var radio = document.createElement("INPUT");
                radio.setAttribute("type", "radio");
                radio.value = i;
                profs.appendChild(radio);
            }
            console.log(profs);
            var board = div(profs, 'trick', undefined);

            body.appendChild(board);
        });
    });
}

var populateBoards = function() {
    var body = document.getElementById('body');
    var boards = document.createElement('div');
    boards.classList.add('body--boards');
    body.appendChild(boards);
    $.get('/api/boards', (data) => {

        data.forEach(e => {
            boards.appendChild(div(e.name, 'board', requestBoardTricks));
        });
    });
}

var populateFollowers = function(me) {
    var following = document.getElementById('followingList');
    $.get('/api/following/' + me, (data) => {

        data.forEach(function(e) {
            $.get('api/user/byId/' + e.following, (name) => {
                var textnode = document.createTextNode(name);
                following.appendChild(div(textnode, 'follower', console.log));
            });
        });
    })
}



$(function(){

    populateBoards();
    getMe((me) => {
        var username = document.getElementById('username');
        username.innerHTML = me;
        username.classList = 'username'

        populateFollowers(me);
    });
});
