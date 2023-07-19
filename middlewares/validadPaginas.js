const {Libreria} = require('../models/libreria');
const validarPaginas = async (req, res, next) => {
    try {
        const paginas = await Libreria.find(req)
        if (paginas >= 49) {
            next();
        } else {
            res.status(400).json({
                msg: "Debe tener un minimo de 49 paginas para considerarse un libro"
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
        
    
}

module.exports = {validarPaginas}