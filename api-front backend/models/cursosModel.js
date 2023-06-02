const db = require('./../config/db');
const{ Router} = require("express");
// tiene que ser asincronica porque todo se ejecuta al mismo tiempo y de esa manera anda
// el console log 
exports.obtenerCursos = async () => {
    const [rows, fiels] = await db.execute('SELECT * FROM cursos')
    console.log(rows)
    return rows;
}
exports.getCursosById = async (id) => {
    const [rows, fields] = await db.execute('SELECT nombre, descripcion FROM cursos WHERE id=?', [id]);
    console.log(rows)
    return rows;
}
