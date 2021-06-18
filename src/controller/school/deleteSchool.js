const { Schools } = require('../../database/tables');
const express = require('express');
const router = express.Router();

module.exports = router.delete('/:_id', async (req, res)=> {
    try {

        const school = await Schools.findByPk(req.params._id)

        if(!school) {
            return res.status(404).json({
                ok: false,
                Message: 'School not found'
            })
        }

        await school.destroy();

        return res.status(200).json({
            ok: true,
            Message: 'Escuela borrada con éxito',
        })

    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            Error: 'Hubo un error a la hora de cambiar la información, intente nuevamente'
        });
    }
})