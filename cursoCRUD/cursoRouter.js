const cursoRouter = require('express').Router();

const {getCursos, postCurso, deleteCurso} = require ('./cursoController');
const {getAlumnos, getMejorAlumno} = require ('../clienteCRUD/clienteController');
const {postValidators} = require ('./cursoValidators');

cursoRouter.get('/', getCursos);

cursoRouter.post('/',postValidators, postCurso);
cursoRouter.delete('/:id', deleteCurso);

cursoRouter.get('/:id/alumnos', getAlumnos);
cursoRouter.get('/:id/mejorAlumno', getMejorAlumno);

module.exports = cursoRouter;