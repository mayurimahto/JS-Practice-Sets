//Q-1
//Create a variable of type string and try to add a number to it
let a = "Mayuri"
let b = 8
console.log(a+b)
//Q-2
//Use typeof operator to find the datatype of the string in last question
console.log(typeof(a+b))
//Q-3
//Create a const object in JS. Can you change it to hold a number later?
const add = {
    name: 'Mayuri',
    section: 1,
    isPrincipal: false
}
//add = 5 No we cant
//Q-4
//Try to add a new key to the const object int problem 3. Were you able to do it?
add['friend'] = "Khushi"
console.log(add)
//Q-5
//Write a JS program to create a word-meaning dictionary of 5 words\
const dict = {
    appreciate: "recognize the full worth of."
    //aise hi aur 5 words add kardena hai
}
console.log(dict.appreciate)
console.log(dict['appreciate'])