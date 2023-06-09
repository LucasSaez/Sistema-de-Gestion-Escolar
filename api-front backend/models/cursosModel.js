const db = require('./../config/db');
const { Router } = require("express");
// tiene que ser asincronica porque todo se ejecuta al mismo tiempo y de esa manera anda
// el console log 
exports.obtenerCursos = async () => {
    const [rows, fiels] = await db.execute('SELECT * FROM cursos')
    console.log(rows)
    return rows;
}
exports.obtenerCursosPorId = async (id) => {
    const [rows, fields] = await db.execute('SELECT nombre, descripcion FROM cursos WHERE id=?', [id]);
    console.log(rows)
    return rows;
}
exports.addCursos = async (nuevoCurso) => {
    const [rows, fields] = await db.execute('INSERT INTO cursos (nombre, descripcion) VALUES (?, ?)', [nuevoCurso.nombre, nuevoCurso.descripcion]);
    return rows;
}
exports.updateCurso = async(curso)=>{
    const [rows, fields] = await db.execute('UPDATE cursos SET nombre = ?, descripcion = ? WHERE id = ?', [curso.nombre, curso.descripcion, curso.id]);
    return rows
}
exports.deleteCursoById = async (id) =>{
    const [rows, fields] = await db.execute('DELETE FROM cursos WHERE id = ?', [id]);
    return rows
} 
exports.getEstudiantesDelCurso = async (id) => {
    const [rows, fields] = await db.execute('SELECT estudiantes.nombre FROM estudiantes_cursos INNER JOIN estudiantes ON estudiantes_cursos.estudiante_id = estudiantes.id INNER JOIN cursos ON estudiantes_cursos.curso_id = cursos.id AND cursos.id = ?', [id]);
    console.log(rows)
    return rows;
}
exports.addEstudianteAUnCurso = async (estudiante) => {
    const [rows, fields] = await db.execute('INSERT INTO `estudiantes_cursos` VALUE ( ?, ? )', [estudiante.estudiante_id, estudiante.id]);
    return rows;
}

exports.deleteEstudianteAUnCurso = async (estudiante) => {
    const [rows, fields] = await db.execute('DELETE FROM `estudiantes_cursos` WHERE `estudiantes_cursos`.`estudiante_id` = ? AND `estudiantes_cursos`.`curso_id` = ?', [estudiante.estudiante_id, estudiante.id]);
    return rows;
}