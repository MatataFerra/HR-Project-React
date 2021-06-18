const { Employee, Schools, Contract, Days, Hours, Claim, Absence, Article } = require('../../../database/tables');
const express = require('express');
const router = express.Router();
const { checkRegExp }  = require('../../../helpers/checkFunctions');

const allEmployeeInfo = router.get('/info/:dni' , async (req, res)=> {

    try {
        const dni = req.params.dni

        const dniChecked = checkRegExp( dni );

        const employee = await Employee.findOne({
            where: {
                dni: dniChecked,
                isactive: true
            },

            include: [
                {
                    model: Schools,
                    include: [
                        {
                            model: Days
                        }
                    ]
                },

                {
                    model: Contract,
                    include: [
                        {
                            model: Days
                        },

                        {
                            model: Hours
                        }
                    ]
                },

                {
                    model: Claim
                },

                {
                    model: Absence,
                    include: [
                        {
                            model: Article
                        }
                    ]
                }
            ]
        });

        if(!employee){
            return res.status(400).json({
                ok: false,
                Message: 'Error al encontrar empleado'
            })
        }

        return res.status(200).json({
            ok: true,
            Employee: employee
        })

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            ok: false,
            Error: 'Hubo un error a la hora de cambiar la información, intente nuevamente'
        })
    }

})

module.exports = {

    allEmployeeInfo
}