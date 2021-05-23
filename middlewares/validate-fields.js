const { response } = require("express");
const { validationResult } = require("express-validator");

const validateFields = (req, resp = response, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return resp.status(400).json({
            ok: false,
            errors: errores.mapped(),
        });
    }
    next();
};

module.exports = {
    validateFields,
};
