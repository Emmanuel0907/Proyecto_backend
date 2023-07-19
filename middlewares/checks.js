const {check} = require('express-validator');
const checks = [
    check("nombre")
        .notEmpty().withMessage("el campo nombre es necesario")
        .isString().withMessage("el campo nombre debe ser de tipo string"),
    check("autor")
        .notEmpty().withMessage("el campo autor es necesario")
        .isString().withMessage("el campo autor debe ser de tipo string"),
    check("editorial")
        .notEmpty().withMessage("el campo editorial es necesario")
        .isString().withMessage("el campo editorial debe ser de tipo string"),
    check("genero")
        .notEmpty().withMessage("el campo genero es necesario")
        .isString().withMessage("el campo genero debe ser de tipo string"),
     check("paginas")
        .notEmpty().withMessage("el campo paginas es necesario")
        .isNumeric().withMessage("el campo paginas debe ser de tipo number"),
    check("idioma")
        .notEmpty().withMessage("el campo idioma es necesario")
        .isString().withMessage("el campo idioma debe ser de tipo string")
];

module.exports = checks