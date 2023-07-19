const { AutoEncryptionLoggerLevel } = require('mongodb');
const {Schema, model} = require('mongoose');
const { getEnvironmentData } = require('worker_threads');

const schema = new Schema ({
    nombre:{
        type: String,
        required: true
    },
    autor:{
        type: String,
        required: true
    },
    editorial:{
        type: String,
        required: true
    },
    genero:{
        type: String,
        required: true
    
    },
    paginas:{
        type: Number,
        required: true
    },
    idioma:{
        type: String,
        required: true,
        Enumerator: ['español', 'ingles','portugues']
    }
})

const Libreria = model('Libreria', schema);
module.exports = {Libreria};