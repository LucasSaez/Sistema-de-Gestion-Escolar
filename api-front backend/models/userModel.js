const db = require('./../config/db');
const { Router } = require("express");
// tiene que ser asincronica porque todo se ejecuta al mismo tiempo y de esa manera anda
// el console log

exports.obtenerUsuarios = async () => {
    const [rows, fiels] = await db.execute('SELECT * FROM usuario')
    console.log(rows)
    return rows;
}

exports.addUser = async (nuevoUser) => {
    const [rows, fields] = await db.execute('INSERT INTO usuario (nombre, contraseña) VALUES (?, ?)', [nuevoUser.nombre, nuevoUser.contraseña]);
    return rows;
}