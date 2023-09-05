// onject literals

const mysys = Symbol("key1")  // interview question,How to access symbol

const Jsuser = {
    name: "Kuldeep",
    "full name": "Kuldeep Gangwar",
    [mysys]: "My key1",
    age: 24,
    location: "Bareilly",
    email:"kuldeep@google.com",
    isLoggedIN: false,
    lastLoginDays: ["Monday","Tuesday"]
}

// console.log(Jsuser.email);  
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mysys]);
// console.log(typeof Jsuser[mysys]);

Jsuser.email = "kuldeep@chat.com"  // boject value change

//  freeze object so can't change the any element
// Object.freeze(Jsuser)

Jsuser.email = "kuldeep@microsoft.com" 
// console.log(Jsuser); 

Jsuser.greeting = function(){
    // console.log("Hello JS user");
}

// console.log(Jsuser.greeting);

// console.log(Jsuser.greeting());

Jsuser.greetingTwo = function(){
    // console.log(`Hello JS user,${this.name}`);
}

// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingTwo());



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const tinderUser = new Object()  //+++signaltan object 
const tinderUser ={}      //+++++ Non signaltan object

tinderUser.id = "1234abc"
tinderUser.name = "kuldeep"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "kuldeep@gmail.com",
    fullname: {
        userfullname:{
        firtsname:"hitesh",
        lastname: "choudhary"

        }
    }
}    

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firtsname);
// console.log(regularUser.fullname?.userfullname.firtsname);

const obj1 = {1:"a",2:"b"}
const obj2 = { 3:"a", 4:"b"}
const obj4 = { 5:"a", 6:"b"}


// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2}
// console.log(obj3);



const user = [
    {

    },
    {

    },
    {

    }
]
user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//+++++++++++++++++++++ CLASS 3 ++++++++++++++++++++++++++++

const course = {
    coursename: " js in hindi",
    price: "999",
    coureseInstructor: "hitesh"
}
// course.coureseInstructor

// const {coureseInstructor} = course
const {coureseInstructor: instructor} = course //destructure
console.log(instructor);

// {
//     "coursename": " js in hindi",
//     "price": "999",
//     "coureseInstructor": "hitesh"
// }

