// var c = 30

let a = 200
if(true){
    let a = 10
    const b = 20
    // console.log("Inner:", a);
}
// console.log(a);
// console.log(b);
// console.log(c);   In broswer global scope is diffent

function one () {
    const username = "kuldeep"
    
    function two () {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //  Hosting
console.log(addone(5));
function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}

