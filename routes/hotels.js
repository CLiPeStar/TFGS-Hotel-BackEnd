/*
Ruta: /api/hotels
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { getHotels, postHotels, putHotels, deleteHotels } = require("../controllers/hotel");
const { validateJWT } = require("../middlewares/validate-jwt");
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.get("/", validateJWT, getHotels);

router.post("/", [validateJWT, check("name", "name is required").not().isEmpty(), validateFields], postHotels);

router.put("/:id", [validateJWT, check("name", "name is required").not().isEmpty(), validateFields], putHotels);

router.delete("/:id", deleteHotels);

module.exports = router;
