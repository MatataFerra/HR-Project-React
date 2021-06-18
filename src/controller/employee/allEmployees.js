const { Employee } = require('../../database/tables');
const express = require('express');
const router = express.Router();

const allEmployees = router.get('/', async (req, res) => {
    
    try {
        let activeEmployee = []
        const employees = await Employee.findAll();

        employees.map(oneEmployee => {
            if(oneEmployee.isactive) {
                return activeEmployee = [...activeEmployee, oneEmployee]
            }
        })
        
        if (activeEmployee.length === 0) {
            return res.status(204).json({
                ok: true,
                Message: 'No se encontraron resultados'
            })
        } else {
            return res.status(200).json({
                ok: true,
                Empleados: activeEmployee
            });
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            Message: 'No se encontró el empleado'
        })
    }

});

const oneEmployee = router.get('/:_id', async (req, res) => {
    try {
        const id = req.params._id
        const employee = await Employee.findByPk(id);

        if(!employee.isactive) {
            return res.status(404).json({Message: 'El empleado que busca no se encuentra'})
        }

        res.status(200).json({
            ok: true,
            Empleado: employee
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            Message: 'No se encontró el empleado'
        })
    }


});

module.exports = {
    allEmployees,
    oneEmployee
}
