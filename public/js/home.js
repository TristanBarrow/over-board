
var me = function(callback) {
    $.get('/api/me', (data) => {
        callback(data.username);
    })
}

var div = function(content, classType, onclick) {
    var node = document.createElement("DIV");
    node.className = classType;

    if (typeof onclick != 'undefined'){
        node.onclick = function() { onclick(content); }
    }

    var textnode = document.createTextNode(content);
    node.appendChild(textnode);
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
            var board = div(e.name, 'trick', undefined);
            body.appendChild(board);
            

        });
    });
}

var populateBoards = function() {
    var body = document.getElementById('body');
    var boards = document.createElement('div', {
        className: 'body--boards'
    });
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
        console.log(data);

        data.forEach(function(e) {
            $.get('api/user/byId/' + e.following, (name) => {
                console.log(name);
                following.appendChild(div(name, 'follower', console.log));
            });
        });
    })
}



$(function(){

    populateBoards();
    me((me) => {
        document.getElementById('username').innerHTML = me;
        populateFollowers(me);
    });
});
