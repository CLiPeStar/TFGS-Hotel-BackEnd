/*
Ruta : /api/Receptionists
*/

const { Router } = require("express");
const { check } = require("express-validator");
const {
    getReceptionists,
    postReceptionists,
    putReceptionists,
    deleteReceptionists,
    getReceptionistById,
} = require("../controllers/receptionist");
const { validateJWT, validateADMIN_ROLE } = require("../middlewares/validate-jwt");
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.get("/", [validateJWT], getReceptionists);

router.post(
    "/",
    [
        validateJWT,
        check("name", "name is required").not().isEmpty(),
        check("hotel", "hotel is required").not().isEmpty(),
        check("hotel", "hotel id must be valid").isMongoId(),
        validateFields,
    ],
    postReceptionists
);

router.put(
    "/:id",
    [
        validateJWT,
        check("name", "name is required").not().isEmpty(),
        check("hotel", "hotel is required").not().isEmpty(),
        check("hotel", "hotel id must be valid").isMongoId(),
        validateFields,
    ],
    putReceptionists
);

router.delete("/:id", [validateJWT, validateADMIN_ROLE], deleteReceptionists);

router.get("/:id", validateJWT, getReceptionistById);

module.exports = router;
