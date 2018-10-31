function add(x,y){
    console.log(x+y)
}
add();

function add2(x=5,y=7){
    console.log(x+y)
}
add2();

function add3(x=5,y=7){
    console.log(x+y)
}
add3(20,60);

function haveFun(activityName="hiking", time=3) {
    console.log(`Today I will go ${activityName} for ${time} hours.`)
}
haveFun("biking", 5);