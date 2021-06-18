const { Schools, level } = require('../../../database/tables');
const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

module.exports = router.get('/level/:level', async (req, res) => {
    
    try {
        const educationlevel  = req.params.level.toLowerCase()
        const edLevel = Object.getOwnPropertyNames(level).find(lvl => lvl === educationlevel);
        
        if(educationlevel !== edLevel){
            return res.json({
                ok: false,
                Message: `El nivel educativo es incorrecto, debe seleccionar alguno válido`,
                lvls: Object.keys(level)
            })
        }

        const school = await Schools.findAll({
            where: {
                educationlevel: {
                    [Op.like]: `%${educationlevel}%`
                }
            }
        })

        if(!school || school.length == 0) {
            return res.json({
                ok: false,
                Message: 'La escuela que busca no se encuentra'
            })
        }

        return res.status(200).json({
            ok: true,
            Escuelas: school
        });

    } catch (error) {
        console.log(error);
        return res.json({
            ok: false,
            Error: 'Hubo un error a la hora de cambiar la información, intente nuevamente'
        })
    }

});