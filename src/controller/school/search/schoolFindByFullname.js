const { Schools } = require('../../../database/tables');
const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();

module.exports = router.get('/fullname/:fullname', async (req, res) => {
    
    try {
        const fullname = req.params.fullname
        const school = await Schools.findOne({
            where: {fullname: {
                [Op.like]: `%${fullname}%`
            }}
        })

        if(!school) {
            return res.json({
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
        res.json({
            ok: false,
            Error: 'Hubo un error a la hora de cambiar la información, intente nuevamente'
        })
    }


});