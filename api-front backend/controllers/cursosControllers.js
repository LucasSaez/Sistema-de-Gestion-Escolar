const cursosModel = require('./../models/cursosModel') 
// traemos todo lo que tiene dentro 

exports.getCursos = async (req, res) => {

    try {

        const cursos = await cursosModel.obtenerCursos();

        res.status(200).json({
            success: true,
            data: cursos
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}
exports.getCursosById = async (req, res) => {
    const idCursos = req.params.id;
    try {
        const cursos = await cursosModel.obtenerCursosPorId(idCursos)

        if (cursos.length < 1) {
            res.status(404).json({
                success: false,
                msg: `nO EXISTE: ${idCursos}`
            })

        }
        res.status(200).json({
            success: true,
           cursos

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

exports.addCursos = async (req, res) => {
    const nuevoCurso = req.body;
    try {
        const id = await cursosModel.addCursos(nuevoCurso)
        res.status(201).json({
            success: true,
            message: "ANDo",
            nuevoCurso
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
exports.updateCurso = async (req, res) => {
    const id = req.params.id;
    const cursoActualizado = req.body;

    const curso = {
        id,
        ...cursoActualizado  //muestra todo lo que necesitamos de forma mas breve
    }
    console.log(curso)
    try {
        const listaActualizada = await cursosModel.updateCurso(curso)
        if (listaActualizada < 1) {
            res.status(404).json({
                success: false,
                message: "datos no actualizados"
            })
         }
        res.status(200).json({
            success: true,
            message: "lista actualizada",
            curso
        })
     }
     catch(error) {
        res.status(500).json({
            success: false,
            message: "No andaaaaaaaaaaaaa"
        })
        }
    }

    exports.deleteCursoById = async(req, res)=>{

        const idCurso = req.params.id;
        try {
            const profesor = await cursosModel.deleteCursoById(idCurso)
    
            if(profesor.length<1){
                res.status(404).json({
                    success:false,
                    mgs:`No existe usuario con el id: ${idProfesor}`
                })
            }

            res.status(200).json({
                success:true,
                msg:"El curso fue eliminado con exito"
            })
        } catch (error) {
    
            console.error(error);
            res.status(500).json({
                success:false,
                message: 'Hubo un error al eliminar el curso'
            })
        }
    }  
    exports.getEstudiantesDelCurso = async (req, res) => {
        const idCursos = req.params.id;
        try {
            const cursos = await cursosModel.getEstudiantesDelCurso(idCursos)
    
            if (cursos.length < 1) {
                res.status(404).json({
                    success: false,
                    msg: `nO EXISTE: ${idCursos}`
                })
    
            }
            res.status(200).json({
                success: true,
               cursos
    
            })
        }
    
        catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: 'Hubo un error al obtener los datos de los cursos'
            })
        }
    }