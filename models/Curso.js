const mongoose = require ('mongoose'); 

const Cliente = require ('./schemas/Cliente');

const Curso = new mongoose.Schema({
    anioDictado: {type: Number},
    duracion: {type: Number}, //Duracion del curso en HORAS
    tema: {type: String},
    alumnos: {type: [Cliente]} //Contiene un array de clientes
}, {collection: 'cursos'});

module.exports = mongoose.model ('Curso', Curso);