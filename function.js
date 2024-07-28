// anything written after . is function i.e .log , .push and function is called by prenthises ()
// const a = 'sagar'
// console.log(a)
// function sum(b,c){
//     const a = b+c

//     console.log(a)
// }
// sum(6,7)

// // define function

// function myFunction(parameters){
//     console.log (parameters)

// }

// //  call funtion

// myFunction(arguments)
// arguments="sagar"

// const sagar=(a,b) => {
//     console.log(a*b)
// }
// sagar(5,6)  // arrow function

// function countVowels(str){
//    let  count=0
//     for( const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
//             {
//                    count++
//         }
//     }
//  console.log(count)
// }
// countVowels("aioue")






// const countVowels = (str) => {
//     count=0
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count)
// };
// countVowels("shiv sagar kumar sinha");





//  diffrence bw fuction and method 
// mehtod is something that is used with Object i.g '.uperrCase'



// callbackfuction is a special term in js only , where we can pass fuction as argument 
/// Function that performs an operation and then uses another function to handle the result


// function addNumbers(a, b, handleResult) {
//     let sum = a + b;
//     handleResult(sum);
// }

// // Function to handle the result
// function showResult(result) {
//     console.log("The sum is: " + result);
// }

// // Calling the function with the function to handle the result
// addNumbers(5, 3, showResult);


//  higher order function are the function that take function as parameters

// eg arr.forEach(element => {
    
// });

// sqr= [2,3,4,5]
// sqr.forEach((val) => {
//     console.log(val*val)
    
// });


// const calcsqr = (x)=>{
//     console.log(x**2)
// }
// num= [66,77,88,99]
// num.forEach(calcsqr) // higher order example bcz i am passing function as a paramenters


//  foreach is used for permoreme some opertaion on each value , 
// but map is used to creat a new array using a old array with some modification

// let num = [3,4,5,6]
// let operation= (x)=>{
//     console.log(x**2) 
// }
// num.map(operation)
// let new_num = num.map((val)=>{    // giving new array using map
//     return val**3
// })
// console.log(new_num)