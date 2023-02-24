//write a program to print the marks of a student in an obj using for loop
let marks = {
    harry: 90,
    mayuri: 99,
    lakshya: 70,
    sheetal: 65
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}
//write the program in ist using for in loop
for(let key in marks){
    console.log("The marks of " + key + " are " + marks[key])
}
//write a program to print "try again" until the user enters the correct number

/*let correctnum = 5
let i
while(i!=correctnum){
    i = prompt("Enter a number")
    console.log("Try again")
}
console.log("You have entered the correct number")
*/

//write a function to find mean of 5 numbers
const mean = (a, b, c, d)=>{
    return (a+b+c+d)/4
}
console.log(mean(4,8,4,5))