const { Schools } = require('../../../database/tables');
const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();

module.exports = router.get('/address/:address', async (req, res) => {
    
    try {
        const address = req.params.address
        const school = await Schools.findOne({
            where: {address: {
                [Op.like]: `%${address}%`
            }}
        })

        if(!school) {
            return res.status(400).json({Message: 'El domicilio de la escuela no está en la base de datos'})
        }

        return res.status(200).json({
            ok: true,
            Escuelas: school
        });

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            ok: false,
            Error: 'Hubo un error a la hora de cambiar la información, intente nuevamente'
        })
    }


});