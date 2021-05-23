/*
Ruta: api/uploads/
*/
const { Router } = require("express");
const expressFileUpload = require("express-fileupload");
const { fileUpload, getImg } = require("../controllers/uploads");
const router = Router();
const { validateJWT } = require("../middlewares/validate-jwt");

router.use(expressFileUpload());

router.put("/:type/:id", validateJWT, fileUpload);
router.get("/:type/:photo", getImg);

module.exports = router;
