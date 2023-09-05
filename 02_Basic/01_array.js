// Array

const Arr = [2,3,4,5,6]
const Arr1 = new Array(1,2,3,4)

// console.log(Arr[1]);

//Array Method

Arr.push(7)

// Arr.unshift(0) // number add in start in array
// Arr.shift()
// console.log(Arr);
// console.log(Arr.includes(9));
// console.log(Arr.indexOf(4));

// const newArr = Arr.join()
// console.log(Arr);
// console.log(newArr);

//  slice , splice

// console.log("A",Arr);

// const myn1 = Arr.slice(1,3)
// console.log(myn1);
// console.log("B", Arr);

// const myn2 = Arr.splice(1,3)
// console.log(myn2);
// console.log("C", Arr);


const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[9,8]]]
const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);


// console.log(Array.isArray("Kuldeep"))
// console.log(Array.from("Kuldeep"))
// console.log(Array.from({name: "Kuldeep"}))  // Interesting Array

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3));





