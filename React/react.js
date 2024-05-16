//1. const & Let ///



// const myName="piyali"
// myName="priya"
// console.log(myName)
// let myName="piyali"
// myName="priya"
// console.log(myName)

// 2.arrow function///

// function value(num){                
// console.log(num)
// }
// value(60)


// let add=(num)=>{
// console.log(num*10)            
// }
// add(2)

// let add=num=>{
//     console.log(num*10)            
// }
// add(10)
// let add=num=>{
//     return num*10            
// }
// console.log(add(10))

// let add =num=>num*10 //1st->function name variable ditehobe (add)
                    //2nd->parameter lite hbe
// console.log(add(10)) // 3rd-> jeta return korte chaichi seta hbe


//3. spread and rest operator//
// spread operetor use kora hoy ekta array,object theke copy kore onno notun arry ba object te osano hoy (...) er madhome//

// array:
// let foodName=["fuchka","bhelpuri","churmur","alukabli"]
// let newFood=["roll","biriyani",...foodName,"ghugni","kochuri"]

// console.log(newFood[5])

// // object:

// let studentList={
//     name:"piya",
//     age:22,
//     class:5
// }
// let studentList1={
//     ...studentList,
//     city:"westbengal",
//     sub:"math"

// }
// let studentList2={...studentList,...studentList1}
// console.log(studentList2)

// // rest operator:
// // rest operator: eita function argument te onek gulo value pass koranor jonno parameter te (...) dite hoy

// function add(...num){
//  console.log(num)
// }
// add(2,1,4,7,8,4,8,9)

//4. Destructuring//
// array:
// let arr=["koyel","disha","bimal","amir"]

// let [value,data,text,test]=arr

// console.log(data)

// // object:
// let preson={
//     name:"priya",
//     age:5,
//     sub:"math"
// }
// let {name,age,sub}=preson
// console.log(age)
// console.log(sub)
// console.log(name)

//5. primitve type and non primitve/Reference


// let preson={
//     name:"priya"
// }
// let preson2={
// ...preson
// }
// // let preson2=preson
// preson2.name="disha"
// console.log(preson)
// console.log(preson2)

// 6.Map//
// let arr=[1,5,2,7,6]
// arr.map((e)=>{
// console.log(e*2)
// })
let arr=[1,5,2,7,6]
let arr2=arr.filter((e)=>{
return e%2===0
})
console.log(arr2)





