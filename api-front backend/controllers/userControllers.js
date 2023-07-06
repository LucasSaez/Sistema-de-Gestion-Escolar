const userModel = require('./../models/userModel') 

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
        const id = await profesoresModel.addProfesor(nuevoProfesor)
        res.status(201).json({
            success: true,
            message: "ANDo",
            nuevoProfesor
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