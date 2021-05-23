/*
Ruta: api/all
*/
const { Router } = require("express");
const { getAll, getCollectionFileds } = require("../controllers/search");
const router = Router();
const { validateJWT } = require("../middlewares/validate-jwt");

router.get("/:search", validateJWT, getAll);
router.get("/collection/:table/:search", validateJWT, getCollectionFileds);

module.exports = router;
