const user = {
    username : "Kuldeep",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`username:${this.username}`)
        // console.log(this)
    }
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn =  isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this (implicitly define )
}

const userOne = new User("Kuldeep",12,true)
const userTwo = new User("Ushma",11,false)

console.log(userOne.constructor)


// new = empty object create is called instance  2. constructor function 3. in add this function

 