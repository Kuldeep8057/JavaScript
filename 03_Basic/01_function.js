// function sayMyName() {
//     console.log("K");
//     console.log("U");
//     console.log("L");
//     console.log("D");
//     console.log("E");
//     console.log("E");
//     console.log("P");
// }

// sayMyName()
// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)
// console.log("Result:",result);

function loginUserMessage(username="samk"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("kuldeep"))
// console.log(loginUserMessage("kuldeep"))  //override username



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

function calculateCartPrice(...num1){  //  ...num1 Rest Operator
    return num1
}
// console.log(calculateCartPrice(200,23,423));

const user = {
    username: "kuldeep",
    price: 233

}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 343
// })

const myNewArray = [300,400,500]
function returnSecondvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondvalue(myNewArray));

console.log(returnSecondvalue([200,400,502]));