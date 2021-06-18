const { Employee } = require('../../database/tables');
const express = require('express');
const router = express.Router();

module.exports = router.put('/:_id', async (req, res)=> {
    try {

        console.log(req.body);

        const employee = await Employee.findByPk(req.params._id)

        if(!employee) {
            return res.status(404).json({
                ok: false,
                Message: 'Employee not found'
            })
        }

        await employee.update(req.body);

        return res.status(200).json({
            ok: true,
            Message: 'Empleado actualizado con éxito',
            employee
        })

    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            Error: 'Hubo un error a la hora de cambiar la información, intente nuevamente'
        });
    }
})