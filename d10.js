/*
JS EXERCISES

        21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete Email from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string in the previous array
        26) Create an array with 100 random numbers in it
        27) Wrote a function to get the MAX and the MIN from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays and returns the longest one
        30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

*/
//Exercise 21:
const x="John"
const y="Doe"
console.log("Exercise 21",'"',x,"<>",y,'"');
//Exercise 22:
const details={
    name:"karishma",
    surname:"shaik",
    email:"itsmekareshma@gmail.com"
}
console.log("EXERCISE 22",details)
//Exercise 23:
delete details.email
console.log("EXERCISE 23",details)
//Exercise 24:
const ten=["karishma","shaik","yaseen","munny","khasim","gowtham","akshay","vidyu","harish","buvi"];
console.log("EXERCISE 24",ten)
//Exercise 25:
console.log("EXERCISE 25",ten)
//Exercise 26:
const randomNumber = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
console.log("Exercise 26",randomNumber)