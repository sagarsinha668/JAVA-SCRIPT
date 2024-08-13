// let score = 400
// console.log(score)

// let balance = new Number(404)   js special method to delare number 
// console.log(balance)

const num = 1000
// console.log(num.toString().length)// number will change into string now, you can use some string properties to it e.g length

// console.log(num.toLocaleString('en-IN'))  // converts bigs number into easy readalbe form in indian context


// console.log(num.toFixed(2))  //  give extra zeroes after real values in point e.g 100.00 // important hai bahut use hota h

// console.log(num.toPrecision(1)) //tricky to use  // under precision method we define the value that we wants presicsed and after that number are comes in e forms e.g(1e+2)

// Number.MAX_VALUE  // there is more method that used with number object EXPLORE

// ++++++++++++++++++++++++++++++++          MATH            +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math.abs(-5)) // convert -ve number to positive abs stands for absolute
// console.log(Math.round(5.5)) // gives round of the number
// console.log(Math.ceil(6.1))// always gives upper value
// console.log(Math.floor(6.1))// always gives lowwer value
// console.log(Math.sqrt(25))// give square root 
// console.log(Math.pow(2,5))// gives power use two variable 
// console.log(Math.random())// gives random numbers between 0 to 1
// console.log(Math.floor(Math.random()))  //always gives zero
// console.log(Math.floor(Math.random()+1))  //always gives ones
// console.log(Math.floor(Math.random()+1)*10)  //always gives 10

// console.log(Math.floor(Math.random()*10)+1)  //always gives greater than 0


// +++  to give range of number ++++

// let max = 6
// let min = 1
console.log(Math.floor(Math.random()*(max-min+1))+min)  //always gives greater than 0   // IMPORATANT ALWAYS REMEMBER IT