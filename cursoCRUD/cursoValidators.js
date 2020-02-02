const { check } = require('express-validator');
const Curso = require('../models/Curso');

const postValidators = [
    check('anioDictado').isNumeric().withMessage("El campo anioDictado debe ser numérico"),
    check('duracion').isNumeric().withMessage("El campo duracion debe ser numérico"),
    check('tema').isString().withMessage("El campo tema debe ser string"),
]

module.exports = { postValidators };