// sym = (Symbol("123"))
// // console.log(sym)
// id = Symbol("123")
// console.log(id===sym)


// theire is two types of datatypes based on call by vlaue and refrence 
// 1. primitives(call by value)=>boolean, string, number , symbol,bigint, null,undefined
// 2. non primitives(call by refrence)=> object , function , array

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack memory used is primitive memory (get copy of that value)
// non primitive datatypes use heap memory  ( get address or refrence of value , change occurs in origional value)


// let Name ="sagar"  // string is a primitive datatypes using stack or copy of value
// let name2= Name 
// name2= "sinha"

// console.log(Name) // sagar
// console.log(name2) // sinha

// //  both console giving diffrent value 


// let user1 = {
//     Name : "sagar",
//     id : 8800
// }

// let user2 = user1
// user2.id=9911

// console.log(user1)// id=9911
// console.log(user2) //id= 9911
// changess occurs in both , both using same value from heap
