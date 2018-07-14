var test = null;

var requestBoardTricks = function(name) {
    var div = document.getElementById('body');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    document.getElementById('body');
    console.log(name);
}

var boardDiv = function(content) {
    var node = document.createElement("DIV");
    node.className = "board";
    node.onclick = function() { requestBoardTricks(content); }
    
    var textnode = document.createTextNode(content);
    node.appendChild(textnode);
    return node;
}


var populateBoards = function() {
    $.get('/boards', (data) => {
        var body = document.getElementById('body');

        data.forEach(e => {
            body.appendChild(boardDiv(e.name));
        });
        
    });
}

var populateUser = function() {

}


$(function(){
    populateBoards();
    populateUser();
});
