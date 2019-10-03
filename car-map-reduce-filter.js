let cars = [
    { make: 'Toyota', model: 'Tundra', year: 2018 },
    { make: 'Ford', model: 'Fusion', year: 1995 },
    { make: 'VW', model: 'Jetta', year: 2018 },

]

let oldCars = cars.filter( (car) => {
    return car.year === 2018
})

// get an object that includes the existing data as well
// as a single full string property named 'display'
// for example '2012 ford fusion
// '"${car.year} ${car.make} ${car.model}'
displayData = cars.map((car) => {
    let newProperty = car
    newProperty.display = car.year + ' ' + car.make + ' ' + car.model
    return newProperty
})



console.log (displayData)