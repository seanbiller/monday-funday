let ages = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let over17 = ages.filter((age) => {
    return age >= 18
}) 

correctAge = over17.map((age) =>{
    let result = {}
    result.age = age
    result.display = '18 is old enough to buy a lottery ticket'
    return result
})

console.log(correctAge)

// provide the ages as objects and include the message such as
// '18 is old enough to buy a lottery ticket'

// filter

// map

//console.log the array of objects
