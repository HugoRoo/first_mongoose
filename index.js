const mongoose = require('mongoose')


const DB_USER = 'hugoRoo'
const DB_PASSWORD = '123Tamarindo'
const DB_HOST = 'kodemia16.5djum.mongodb.net'
const DB_NAME = 'kodemia' 

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

// Modelo (plantilla | template)



// Schema (Definir mi Plantilla)

/*
1. Generamos el schema
2. A partir del Shema generamos el modelo
*/

const koderSchema = new mongoose.Schema({
    name: {
        type: String, 
        require: true,
        minLength: 3,
        maxLength: 100,
        trim: true 
    },
    lastName: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    age: {
        type: Number,
        require: true,
        min: 1,
        max: 150
    },
    gender: {
        type: String,
        require: true, 
        trim: true,
        maxLength: 1,
        enum: ['f', 'm'] // estos valores son válidos
    }
})

//modelo 

const koder = mongoose.model('koders', koderSchema)





mongoose.connect(URL)
    .then(async (connection) => {
        console.log('DB conection established: ')
        
  
   

        // koder.find({})
        //     .then((koders) => {
        //         console.log('Mis koders: ', koders)
        //     })
        //     .catch((error) => console.error('Error: ', error))

        const newKoder = {
            name: 'Cristian',
            lastName: 'Luna',
            age: 42,
            gender: 'm'
        }
        koder.create(newKoder)
            .then((koderCreated) => {
                console.log('KoderCreated: ', koderCreated)
            })
            .catch((error) => console.error('Error: ', error))
        const koderCreated = await koder.create(newkoder)
        console.log(koderCreated)
    })
    .catch((error) => {
        console.error('Error: ', error)
    })