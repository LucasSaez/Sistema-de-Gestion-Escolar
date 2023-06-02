const profesoresModel = require('./../models/profesoresModel') // traemos todo lo que tiene dentro 

exports.getProfesores = async (req, res) => {
    //evaluamos el bloque dentro del try
    try {
        //obtenemos los datos desde el modelo
        const profesores = await profesoresModel.obtenerProfesores();

        //si todo va bien respondemos con los usuarios, del lado del cliente
        //lo obtenemos con json
        //status 200 que todo fue ok
        res.status(200).json({
            success: true,
            data: profesores
        })

    } catch (error) {
        //si las instrucciones dentro del bloque try fallan, 
        //capturamos el error, lo mostramos en consola
        //y devolvemos la info del error al cliente
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}
exports.getProfesoresById = async (req, res) => {
    const idProfesor = req.params.id;
    try {
        const profesores= await profesoresModel.getProfesoresById(idProfesor)

        if (profesores.length < 1) {
            res.status(404).json({
                success: false,
                msg: `nO EXISTE: ${idProfesor}`
            })

        }
        res.status(200).json({
            success: true,
           profesores

        })
    }

    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos de los Profesores'
        })
    }
}
