const people = [
    {
        name: "Nikhil",
        age: 22,
        position: "PDE1"
    },
    {
        name: "Pranjal",
        age: 22,
        position: "ML Dev"
    },
    {
        name: "Pradumna",
        age: 22,
        position: "MBA"
    }
]

//return a new array
//does not change the size of original array unlike filter method
//use value from original array when making new one

const age = people.map((item)=>{
    return item.age;
})

console.log(age);