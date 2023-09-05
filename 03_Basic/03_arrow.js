const user = {
    username: "Kuldeep",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcometo website`);
        // console.log(this);
    } 
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "kuldeep"
//     // console.log(this)
//     // console.log(this.username);     //undefine

// }
// chai()

const  chai = function(){
    let username = "kuldeep"

    console.log(this);     //undefine
}
chai()


// ++++++++++++++++++++++++++++++++++++++++++
// syntax: () => {}

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

//  OR
// const addTwo = (num1,num2) =>  num1 + num2

const addTwo= (num1 ,num2) => ({username:"Kuldeep"})
console.log(addTwo(5,4))

// const myArray = [3,5,74,24,5]

// myArray.forEach()