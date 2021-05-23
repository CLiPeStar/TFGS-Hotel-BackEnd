const jwt = require("jsonwebtoken");
const User = require("../models/user");

const validateJWT = (req, res, next) => {
    const token = req.header("x-token");

    if (!token) {
        return res.status(401).send({ ok: false, error: "Token is required" });
    }
    try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        next();
    } catch (error) {
        return res.status(401).send({ ok: false, error: "Token not valid" });
    }
};

const validateADMIN_ROLE = async (req, res, next) => {
    const uid = req.uid;
    try {
        const user = await User.findById(uid);
        if (!user) {
            return res.status(404).send({ ok: false, error: "No user find" });
        }

        if (user.role != "ADMIN_ROLE") {
            return res.status(403).send({ ok: false, error: "You can't do it" });
        }

        next();
    } catch (error) {
        return res.status(500).send({ ok: false, error: "Talk with admin" });
    }
};

const validateADMIN_ROLE_or_I = async (req, res, next) => {
    const uid = req.uid;
    const id = req.params.id;
    try {
        const user = await User.findById(uid);
        console.log(id, uid);
        if (!user) {
            return res.status(404).send({ ok: false, error: "No user find" });
        }

        if (user.role === "ADMIN_ROLE" || uid === id) {
            next();
        }
    } catch (error) {
        return res.status(500).send({ ok: false, error: "Talk with admin" });
    }
};

module.exports = {
    validateJWT,
    validateADMIN_ROLE,
    validateADMIN_ROLE_or_I,
};
