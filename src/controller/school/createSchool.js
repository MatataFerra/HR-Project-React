const { Schools, level } = require('../../database/tables');
const express = require('express');
const router = express.Router();

const createSchool = router.post('/', async (req, res)=> {

    try {
        const educationlevel  = req.body.educationlevel.toLowerCase();
        const edLevel = Object.getOwnPropertyNames(level).find(lvl => lvl === educationlevel);

        if(educationlevel !== edLevel){
            return res.status(404).json({
                ok: false,
                Message: 'Debe seleccionar uno de los siguientes niveles educativos',
                lvls: Object.keys(level),
            })
        }

        await Schools.create(req.body);

        return res.status(200).json({
            ok: true,
            Message: 'Escuela creada con éxito'
        })


    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            Error: 'Hubo un error a la hora de obtener la información, intente nuevamente'
        });
    }
});


module.exports = {
    createSchool
}