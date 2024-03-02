// Calculate the sum of numbers within an array
const numbers = [2,3,3,1,3,4,5,6,7,4]
let sum = 0;
for (let no = 1; no < numbers.length; no++)
{
    sum +=numbers[no];
}
console.log(sum)

//Length converter function

function converter(length){
    //convert the length from meter to centimetre 
        const metre = length * 100;
        return metre
    }
    const metreValue = converter(30);
    console.log(metreValue+ ' centimetres');

    //Print an all even number from 0 - 100

    for (let number = 1; number <= 100; number = number+1){
        if (number%2 == 0){
            console.log(number+' is an even number')
        }
        
        }
        
             // Multiplication table 


// take input from the user
const number =3

//creating a multiplication table
for(let no = 1; no <= 12; no++) {

    // multiply i with number
    const result = no * number;

    // display the result
    console.log(`${number} * ${no} = ${result}`);
}
// Reverse array
const fruits = ["Banana", "Orange", "Apple", "Mango", 'Watermelon'];
fruits.reverse();
console.log(fruits)

//Sorting an array of strings in alphabetical order
const names =[
    'Mercy' , 'Joseph', 'Oluwatosin', 'Gerald', 'Okeke', 'Samson', 'Adebowale'
 ] 
 names.sort();
 console.log(names)

 //Sort an array of numbers in descending order

 const nos = [4,3,4,6,7,0.9,9,1]
 nos.sort();
 nos.reverse();
 console.log(nos)

 //Return a Boolean if a number is divisible by 10

 const num10  = parseInt(prompt('Enter an integer: '));
  if (num10%10 == 0){
    console.log(true)
}
else {
    console.log(false)
}

//Return the number of vowels in a string.
function vowel(count) { 

    // find the count of vowels
    const vowelcount = count.match(/[aeiou]/gi).length;

    // return number of vowels
    return vowelcount;
}

// take input
const string = prompt('Enter a string: ');

const result = vowel(string);

console.log(result);

//Create a function that filters out negative numbers.
const negativeNumbers = [3,3,4,-1,-4,-5,8,9,-9,4,2]
for (let nNo = 0; nNo < negativeNumbers.length; nNo++) {
    const ngtNo = negativeNumbers[nNo];

    if (ngtNo <0 ){
        console.log (ngtNo)
    }
}