const User = require("../models/user");
const crypto = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");
const { googleVerify } = require("../helpers/google-verify");
const { getMenuFrontEnd } = require("../helpers/menu-frontend");

const login = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .then((user) => {
            //Verificar contraseña
            if (!user) {
                return res.status(404).json({
                    ok: false,
                    error: "Mail no match",
                });
            }

            //Verificar contraseña
            const validPassword = crypto.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(404).json({
                    ok: false,
                    error: "Password  no valid",
                });
            }

            //Generar token - JWT
            const token = generateJWT(user.id)
                .then((token) => {
                    return res.status(200).json({
                        ok: true,
                        token,
                        menu: getMenuFrontEnd(user.role),
                    });
                })
                .catch(() => {});
        })
        .catch((err) => {
            res.status(404).json({
                ok: false,
                error: err,
            });
        });
};

const googleSignIn = async (req, res) => {
    const googleToken = req.body.token;
    try {
        const { name, email, picture } = await googleVerify(googleToken);
        const userDB = await User.findOne({ email });
        let user;
        if (!userDB) {
            //Si noe ciste el usuario
            user = new User({
                name: name,
                email,
                password: "",
                img: picture,
                google: true,
            });
        } else {
            // Existe el usuario
            user = userDB;
            user.google = true;
            user.img = picture;
        }
        await user.save();
        const token = await generateJWT(user.id);
        res.json({
            ok: true,
            msg: "Google SignIn",
            token,
            menu: getMenuFrontEnd(user.role),
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Google SignIn",
            token: "Token no valid",
            error,
        });
    }
};

const renewToken = async (req, res) => {
    const uid = req.uid;
    const token = await generateJWT(uid);
    const user = await User.findById(uid);
    res.json({
        ok: true,
        token,
        user,
        menu: getMenuFrontEnd(user.role),
    });
};
module.exports = {
    login,
    googleSignIn,
    renewToken,
};
