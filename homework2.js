//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function parse(person3){
    for(let i = 0; i < Object.keys(person3).length; i++){
        key = Object.keys(person3)[i]
        value = Object.values(person3)[i]


        if(Array.isArray(value)){
            if ((typeof value[0]) == 'object'){
                for(let i2 = 0; i2 < Object.keys(value[0]).length; i2++){
                    console.log(Object.values(value[0])[i2]+" "+Object.keys(value[0])[i2]+" "+key)
                }   
            } else{
                for(let i2 = 0; i2 < value.length; i2++){
                    console.log(value[i2]+" "+key)
                }  
            }  
        }else{
            console.log(value)
        }
   
    } 
}

parse(person3)








//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age){
    this.name=name
    this.age=age
    this.printInfo= () => console.log(`${this.name} is ${this.age} years old`)
    this.incrementage=()=>this.age++
    this.addage=(num)=>this.age=this.age+num
}
let person1=new Person("mark",45)
let person2=new Person("David",39)

person1.printInfo()
person1.incrementage()
person1.printInfo()
person2.printInfo()
person2.addage(3)
person2.printInfo()
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const stringLength = (string) => {
    return new Promise( (resolve,reject) => {
        if(string.length>10){


            resolve(true)
        } else {
            reject(false)
        }
    })
}
stringLength("cranberry")
.then( (result) => {
    console.log("Big word")
})
.catch( (error) => {
    console.log("Small number")
})