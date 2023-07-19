const {Libreria} = require('../models/libreria');
const validarId = async (req, res, next) => {
    try {
        const libro = await Libreria.findById(req.params.id);
        if (libro !== null) {
            next();
        } else {
            res.status(400).json({
                msg: "el id ingresado no es correcto"
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {validarId}