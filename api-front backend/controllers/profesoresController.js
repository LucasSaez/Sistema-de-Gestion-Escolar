const profesoresModel = require('./../models/profesoresModel') 


exports.getProfesores = async (req, res) => {

    try {

        const profesores = await profesoresModel.obtenerProfesores();

        res.status(200).json({
            success: true,
            data: profesores
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}
exports.getProfesoresById = async (req, res) => {
    const idProfesores = req.params.id;
    try {
        const profesor= await profesoresModel.obtenerProfesoresPorId(idProfesores)

        if (profesor.length < 1) {
            res.status(404).json({
                success: false,
                msg: `nO EXISTE: ${idProfesores}`
            })

        }
        res.status(200).json({
            success: true,
           profesor

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

exports.addProfesor = async (req, res) => {
    const nuevoProfesor = req.body;
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
exports.updateProfesor = async (req, res) => {
    const id = req.params.id;
    const profesorActualizado = req.body;

    const profesor = {
        id,
        ...profesorActualizado  //muestra todo lo que necesitamos de forma mas breve
    }
    console.log(profesor)
    try {
        const listaActualizada = await profesoresModel.updateProfesor(profesor)
        if (listaActualizada < 1) {
            res.status(404).json({
                success: false,
                message: "datos no actualizados"
            })
         }
        res.status(200).json({
            success: true,
            message: "lista actualizada",
       profesor
        })
     }
     catch(error) {
        res.status(500).json({
            success: false,
            message: "No andaaaaaaaaaaaaa"
        })
        }
    }
    exports.deleteProfesorById = async(req, res)=>{

        const idProfesor = req.params.id;
        try {
            const profesor = await profesoresModel.deleteProfesorById(idProfesor)
    
            if(profesor.length<1){
                res.status(404).json({
                    success:false,
                    mgs:`No existe usuario con el id: ${idProfesor}`
                })
            }

            res.status(200).json({
                success:true,
                msg:"El profesor fue eliminado con exito"
            })
        } catch (error) {
    
            console.error(error);
            res.status(500).json({
                success:false,
                message: 'Hubo un error al eliminar el profesor'
            })
        }
    }  
