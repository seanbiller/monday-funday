require('dotenv').config()

// MY_MEM is an env variable we are making up for the sake of testing env varabiables.
// This can be tested using MY_MEM=Arrays node envirnment_variables.js 
// This will result in the console logging out "I remember Arrays"
console.log('I remember ' + process.env.MY_MEM)


// I won't specify MY_FAV intentionally so I can see the default being used
const my_favorite = process.env.MY_FAV || 'filter function'
console.log('I really like the ' + my_favorite)

// If the value has spaces then you need quotes // MY_MEM="Arrays in JS" node envirnment_variables.js 
// MY_MEM=Arrays node envirnment_variables.js 
// MY_MEM=Arrays DB_HOST=myprodawshost node envirnment_variables.js 
const db_host = process.env.DB_HOST || 'localhost'
console.log('Using database host: ' + db_host)
