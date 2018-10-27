for(i= 0; i<45; i++){
    var div = document.createElement('div');
    div.onclick = function() {
        alert("you clicked on a box #" + i);
    };

    document.getElementsByTagName('section')[0].appendChild(div);
}