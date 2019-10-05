
addOne = function (numberToAddTo) {
    if (numberToAddTo === undefined)    {
        throw new Error ('You must provide a number to add to')
    }     

    return numberToAddTo + 1
}

try {
    // failing to provdie a number results in an error
    let result = addOne()
    console.log(result)
}
catch (err) {
    console.log(err.message)
    console.log(err.name)
   // console.log(err.stack)
}

