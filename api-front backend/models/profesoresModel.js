const db = require('./../config/db');
const{ Router} = require("express");
// tiene que ser asincronica porque todo se ejecuta al mismo tiempo y de esa manera anda
// el console log 
exports.obtenerProfesores = async () => {
    const [rows, fiels] = await db.execute('SELECT * FROM profesores')
    console.log(rows)
    return rows;
}
exports.getProfesoresById = async (id) => {
    const [rows, fields] = await db.execute('SELECT nombre, especialidad, email FROM profesores WHERE id=?', [id]);
    console.log(rows)
    return rows;
}