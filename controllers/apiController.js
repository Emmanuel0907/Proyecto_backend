const {Libreria} = require('../models/libreria');


class ApiController {
   async ver (req, res) {
    const biblioteca = await Libreria.find();

        res.status(200).json(biblioteca)
    }
    async buscarPorId (req, res) {
        const biblioteca = await Libreria.findById(req.params.id);
    
            res.status(200).json(biblioteca)
        }

    async crear (req, res){
        
        try {
            const nuevoLibro = new Libreria(req.body);
            await nuevoLibro.save();
            res.status(201).json(nuevoLibro);
            
            } catch (error) {
            res.status(500).json(error)
         }

        
    }
    async editar (req, res){
        try {
            await Libreria.findByIdAndUpdate(req.params.id,req.body)
            res.status(201).json({
                msg: `el ejemplar ` + req.params.id + ` fue actualizado`
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async eliminar (req, res){
        await Libreria.findByIdAndDelete(req.params.id)
        res.status(204).send()
    }
}

module.exports = new ApiController