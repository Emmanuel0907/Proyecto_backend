const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const {validarId} = require('../middlewares/validarID');
const checks = require('../middlewares/checks');
const {validarChecks} = require('../middlewares/validarChecks');
const {validarPaginas} = require('../middlewares/validadPaginas')
const {traerApi} = require('../apiExterna/apiExterna');


router.get('/ver', apiController.ver )
router.get('/publicaciones', traerApi )
router.get('/buscar/id/:id',validarId, apiController.buscarPorId)
router.post('/crear',checks,validarChecks,validarPaginas, apiController.crear )
router.put('/editar/id/:id',validarId,checks,validarChecks,validarPaginas, apiController.editar )
router.delete('/eliminar/id/:id',validarId, apiController.eliminar)


module.exports = router