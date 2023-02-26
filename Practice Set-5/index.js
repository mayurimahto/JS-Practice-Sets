//Q-1
//Create an array of numbers and take input from the user to add numbers to this array
/*let arr = [1, 2, 3, 4, 5, 6, 7, 83]
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)*/

//Q-2
//Keep adding numbers to the array in q-1 until 0 is added to the array
/*let arr = [1, 2, 3, 4, 5, 6, 7, 83]
let a
do(){
    a = prompt("Enter a number")
    a = Number.parseInt(a)
    arr.push(a)
    console.log(arr)
}while(a!=0)*/

//Q-3
//Filter for numbers divisible by 10 from a given array
let arr = [10, 55, 450, 88, 600, 1000]
let newarr = arr.filter((x)=>{
    return x%10 == 0
})
console.log(newarr)

//Q-4
//Create an array of square of given numbers
let newarr2 = arr.map((x)=>{
    return x*x
})
console.log(newarr2)

//Q-5
//Use reduce to calculate factorial of a given number from an array of 1st n natural number( n being the number whose factorial needs to be calculated)
let array = [1, 2, 3, 4, 5, 6]
let newarray = array.reduce((x1,x2)=>{
    return x1*x2
})
console.log(newarray)