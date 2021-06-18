const { Employee } = require('../../../database/tables');
const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();

module.exports = router.get('/lastname/:lastname', async (req, res) => {
    
    try {

        const lastname = req.params.lastname

        const employee = await Employee.findAll({
            where: {
                lastname: {
                    [Op.like]: `%${lastname}%`
                },
                isactive: true
            }
        })
        
        
        if(employee.length === 0) {
            return res.json({
                ok: false,
                Message: 'El empleado que busca no se encuentra'
            })
        }

        return res.status(200).json({
            ok: true,
            Empleados: employee
        });

    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            Error: 'Hubo un error a la hora de cambiar la información, intente nuevamente'
        })
    }


});