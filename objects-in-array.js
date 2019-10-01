const cars = [
    { year: '2019', make: 'Honda', model: 'Civic' },
    { year: '2005', make: 'VW', model: 'Jetta' },
    { year: '1969', make: 'Chevrolet', model: 'Chevelle SS' },
    { year: '2005', make: 'Honda', model: 'Accord' },
]

const byyear = cars.reduce((accumulator, car) => {
    const { year, make, model } = car
    const priorCars = accumulator[year] || []
    const carsAlreadyLookedAt = priorCars.concat({ make, model })
    return { ...accumulator, [year]: carsAlreadyLookedAt }
}, {})
console.log(byyear)