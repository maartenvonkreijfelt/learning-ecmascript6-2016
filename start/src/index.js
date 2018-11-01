var studentList = function(students){
    console.log(students);
    };
var studentList2 = students => console.log(students);

var studentList3 = (student, teachter) => console.log(student, teachter);



studentList(["Joe", "Cindy", "Jeanne"]);

studentList2(["Joe", "Cindy", "Jeanne"]);

studentList3("Peter","Francis");