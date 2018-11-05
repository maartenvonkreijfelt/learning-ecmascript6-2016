function* eachItem(arr) {
    for(var i=0; i< arr.length; i++) {
        yield arr[i];
    }
}

var letters = eachItem(["a", "b", "c", "d", "e", "f", "g"]);

var abcs = setInterval(function(){
        var letter = letters.next();
        if(letter.done) {
            clearInterval(abcs);
            console.log("Now I know my ABC's");
        } else {
            console.log(letter.value);
        }
    },

    500);

