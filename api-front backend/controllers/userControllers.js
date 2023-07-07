const userModel = require('./../models/userModel') 
const bcryptjs = require("bcryptjs")

exports.getUsers = async (req, res) => {

    try {

        const user = await userModel.obtenerUsuarios();

        res.status(200).json({
            success: true,
            data: user
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}

exports.addUser = async (req, res) => {
    const nuevoUser = req.body;
    try {
        let passwordHash = await bcryptjs.hash(nuevoUser.contraseña, 8) ;
        nuevoUser.contraseña = passwordHash;
        const id = await userModel.addUser(nuevoUser)
          
        res.status(201).json({
            success: true,
            message: "el nuevo usuario ha sido agregado con exito",
            nuevoUser
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}