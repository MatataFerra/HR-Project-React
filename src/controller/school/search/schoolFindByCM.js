const { Schools } = require('../../../database/tables');
const express = require('express');
const router = express.Router();
const { checkRegExp }  = require('../../../helpers/checkFunctions');

module.exports = router.get('/commune/:commune', async (req, res) => {
    
    try {
        
        const commune = req.params.commune
        const communeChecked = checkRegExp( commune );
        
        if(!communeChecked){
            return res.status(400).json({
                ok: false,
                Message: 'Debe introducir un número válido'
            })
        }

        const school = await Schools.findAll({
            where: {commune: communeChecked}
        })

        if(!school || school.length === 0) {
            return res.status(400).json({
                ok: false,
                Message: 'La escuela que busca no se encuentra'
            })
        }

        res.status(200).json({
            ok: true,
            Escuelas: school
        });

    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            Error: 'Hubo un error a la hora de cambiar la información, intente nuevamente'
        })
    }


});