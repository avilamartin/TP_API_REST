//Defino la estructura de CLIENTE

const mongoose = require('mongoose');

const Cliente = new mongoose.Schema({
    nombre: {type: String},
    apellido: {type: String},
    dni: {type: String},
    direccion: {type: String},
    nota: {type: Number}
}, {_id: false});

module.exports = Cliente;