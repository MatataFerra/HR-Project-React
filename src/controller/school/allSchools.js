const { Schools } = require('../../database/tables');
const express = require('express');
const router = express.Router();

const allSchools = router.get('/', async (req, res) => {
    
    try {
        const schools = await Schools.findAll({
            order: [
                ['district', 'ASC']
            ]
        });

        return res.status(200).json({
            ok: true,
            Escuelas: schools
        });

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            ok: false,
            Error: 'Hubo un error a la hora de obtener la información, intente nuevamente'
        })
    }

});

const oneSchool = router.get('/:_id', async (req, res) => {
    
    try {
        const id = req.params._id
        const school = await Schools.findByPk(id);

        if(!school) {
            return res.status(404).json({
                ok: false,
                Message: 'El establecimiento que busca no se encuentra'
            })
        }

        res.status(200).json({
            ok: true,
            Escuela: school,
        });

    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            Error: 'Hubo un error a la hora de obtener la información, intente nuevamente'
        })
    }

});

module.exports = {
    allSchools,
    oneSchool,
}