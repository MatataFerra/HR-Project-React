const { Schools } = require('../../../database/tables');
const express = require('express');
const router = express.Router();
const { checkRegExp }  = require('../../../helpers/checkFunctions');

module.exports = router.get('/district/:district', async (req, res) => {
    
    try {
        const district = req.params.district

        const districtChecked = checkRegExp( district );
        
        if(!districtChecked){
            return res.json({
                ok: false,
                Message: 'Debe introducir un número válido'
            })
        }

        const school = await Schools.findAll({
            where: {district: districtChecked}
        })

        if(!school || school.length === 0) {
            return res.status(400).json({
                ok: true,
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