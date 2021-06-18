const { Employee } = require('../../../database/tables');
const express = require('express');
const router = express.Router();
const { checkRegExp }  = require('../../../helpers/checkFunctions');

module.exports = router.get('/dni/:dni', async (req, res) => {
    
    try {
        const dni = req.params.dni

        const dniChecked = checkRegExp( dni );
        
        if(!dniChecked){
            return res.status(400).json({
                ok: false,
                Message: 'Debe introducir un número válido'
            })
        }

        const employee = await Employee.findAll({
            where: {dni: dniChecked}
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