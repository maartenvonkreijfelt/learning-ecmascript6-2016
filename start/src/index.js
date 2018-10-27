var x=10;

if(x){
    //give x block scope (only inside the if block)
    let x = 4;
}
console.log(x);
