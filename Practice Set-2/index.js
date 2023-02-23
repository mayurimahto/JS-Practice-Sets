//Use logical operators to find whether the age of a person lies between 10 and 20
let age = 15
if(age>10 && age<20){
    console.log("yes")
}
else{
    console.log("no")
}
//Demonstrate the use of switch case statement in JS
let Age = 15
switch(Age){
    case 5:
        console.log("Your age is 5")
        break
    case 10:
        console.log("Your age is 10")
        break
    case 15:
        console.log("Your age is 15")
        break
    case 20:
        console.log("Your age is 20")
        break
    default:
        console.log("Your age is not special")
}
//Write a JS program to find whether a number is divisible by 2 and 3
let num = 24
if(num%2==0 && num%3==0){
    console.log("num is divisible by 2 and 3")
}
else{
    console.log("num is not divisible by 2 and 3")
}