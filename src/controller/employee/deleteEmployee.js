const { Employee } = require('../../database/tables');
const express = require('express');
const router = express.Router();

module.exports = router.put('/:_id', async (req, res)=> {
    try {
        const { isactive } = req.body
        const employee = await Employee.findByPk(req.params._id)

        if(!isactive) {
            return res.status(404).json({
                ok: false,
                Message: 'You cant change this field '
            })
        }
        await employee.update(req.body);

        return res.status(200).json({
            Message: 'Empleado dado de baja con éxito',
            update: req.body
        })

    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            Error: 'Hubo un error a la hora de cambiar la información, intente nuevamente'
        });
    }
})