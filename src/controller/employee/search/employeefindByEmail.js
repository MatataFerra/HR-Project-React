const { Employee } = require('../../../database/tables');
const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();

module.exports = router.get('/email/:email', async (req, res) => {
    
    try {
        const email = req.params.email
        const employee = await Employee.findOne({
            where: {email: {
                [Op.like]: `${email}%`
            }}
        })
        
        if(!employee) {
            return res.status(404).json({
                ok: false,
                Message: 'El empleado que busca no se encuentra'
            })
        }

        if(employee.isactive === 0 || employee.isactive === false) {
            return res.status(404).json({
                ok: false,
                Message: 'El empleado que busca está inactivo'
            })
        }

        res.status(200).json({
            ok: true,
            Empleados: employee
        });

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            ok: false,
            Error: 'Hubo un error a la hora de cambiar la información, intente nuevamente'
        })
    }

});