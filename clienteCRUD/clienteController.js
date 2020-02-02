const Curso = require('../models/Curso');
const mongoose = require('mongoose');

const getAlumnos = (req, res, next) => {
    const id = req.params.id;

    Curso.findById(id)
        .then(cursos => {
            if (!cursos) {
                res.status(404).json({
                    code: 12,
                    message: "Recurso no encontrado"
                });
            } else {
                res.status(200).json({
                    code: 0,
                    message: cursos.alumnos
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
               code: 20,
               message: "Ocurrió un error con un módulo interno"
            });
        });
};

const getMejorAlumno = (req, res, next) => {
    const id = req.params.id;
    const objectID = mongoose.Types.ObjectId(id);
    Curso.aggregate([
        {$match: {_id: objectID}},
        {$unwind: "$alumnos"},
        {$project:{"alumnos":1}},
        {$sort: {"alumnos.nota":-1}},
        {$limit:1}
    ])
        .then(cursos => {
            if (!cursos) {
                res.status(404).json({
                    code: 12,
                    message: "Recurso no encontrado"
                });
            } else {
                res.status(200).json({
                    code: 0,
                    message: cursos
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        });
}

module.exports = {getAlumnos, getMejorAlumno};