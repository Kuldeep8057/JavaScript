// Immediately Invoked Function Expressions (IIFE)

(function chai (){
    console.log(`DB connected`);
})();  //semicolon is must here 

/* ()() globe scope ke pollution se  problem hoti hai kai bar to globe variabke ke pollution ko 
    hatne ke liye IIFE ka use hota hai*/

( () => {
    console.log(`Db connected ${name}`);
})('Kuldeep');   