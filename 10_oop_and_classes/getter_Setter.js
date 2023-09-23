class User {
    constructor(email,password){
        this.email =email;
        this.password = password
    }
    get email(){
        return  this._email.toUpperCase()
    }
    set email(value){
        this._email =value
    }
    get password(){
        return `${this._password}kuldeep`
    }

    set password(value){
        this._password = value
    }
}

const kuldeep = new User("K@gmail.com","1abc")
// console.log(kuldeep.password)
console.log(kuldeep.email)


