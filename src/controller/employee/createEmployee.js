const { Employee } = require('../../database/tables');
const express = require('express');
const router = express.Router();

const createEmployee =  router.post('/', async (req, res)=> {
    try {
        const { dni } = req.body
        const existingEmployee = Employee.findOne({where: { dni }})

        if( existingEmployee ) {
            return res.status(400).json({
                ok: false,
                Message: 'El empleado que intenta crear ya existe'
            })
        }

        await Employee.create(req.body);

        return res.status(200).json({
            ok: true,
            Message: 'Empleado creado con éxito'
        })

    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            Error: 'Hubo un error a la hora de modificar la información, intente nuevamente'
        });
    }
})

module.exports = {
    createEmployee
}