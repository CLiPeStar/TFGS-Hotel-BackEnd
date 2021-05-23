/*
Rute: /api/users
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { getUsers, postUser, putUser, deleteUser } = require("../controllers/user");
const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT, validateADMIN_ROLE, validateADMIN_ROLE_or_I } = require("../middlewares/validate-jwt");

const router = Router();

router.get("/", validateJWT, getUsers);

router.post(
    "/",
    [
        check("name", "Name is required").not().isEmpty(),
        check("password", "Password is required").not().isEmpty(),
        check("email", "Email is required").isEmail(),
        validateFields,
    ],
    postUser
);

router.put(
    "/:id",
    [
        validateJWT,
        validateADMIN_ROLE_or_I,
        check("name", "Name is required").not().isEmpty(),
        check("email", "Email is required").isEmail(),
        check("role", "Role is required").not().isEmpty(),
        validateFields,
    ],
    putUser
);

router.delete("/:id", [validateJWT, validateADMIN_ROLE], deleteUser);

module.exports = router;
