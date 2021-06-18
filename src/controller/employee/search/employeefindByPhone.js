const { Employee } = require('../../../database/tables');
const express = require('express');
const router = express.Router();

module.exports = router.get('/phone/:phone', async (req, res) => {
    
    try {
        const phone = req.params.phone
        const employee = await Employee.findAll({
            where: {phone: phone}
        })

        if(!employee || employee.length === 0) {
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