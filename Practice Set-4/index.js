//Q-1
console.log("har\"".length)

//q-2
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// Expected output: "The word "fox" is in the sentence"

//q-4
let str = "Please give Rs 1000"
let amount = Number.parseInt(str.slice("Please give Rs".length))
console.log(amount)

//q-5
let friend = "Deepika"
friend[3] = "R"
console.log(friend)

//friend is not changed because string is immutable