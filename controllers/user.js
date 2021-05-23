const User = require("../models/user");
const crypto = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");

const getUsers = async (req, resp) => {
    const since = Number(req.query.since) || 0;
    Promise.all([User.find({}, "name email role google img").skip(since).limit(5), User.countDocuments()])
        .then(([user, total]) => {
            resp.json({ ok: true, user: user, uid: req.uid, total });
        })
        .catch((err) => {
            resp.json({ error: err });
        });
};

const postUser = (req, resp) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .then((user) => {
            if (!user) {
                const newUser = new User(req.body);

                //Crypto password
                const hash = crypto.genSaltSync();
                newUser.password = crypto.hashSync(password, hash);
                newUser
                    .save()
                    .then((user) => {
                        generateJWT(user.id).then((token) => {
                            resp.json({ ok: true, user, Token: token });
                        });
                    })
                    .catch((err) => {
                        resp.status(500).send({ ok: false, error: err });
                    });
            } else {
                resp.status(400).send({ ok: false, error: "User already exist" });
            }
        })
        .catch((err) => {
            resp.status(500).send({ ok: false, error: err });
        });
};

const putUser = async (req, res) => {
    const uid = req.params.id;

    try {
        const userDB = await User.findById(uid);

        if (!userDB) {
            return res.status(404).json({
                ok: false,
                error: "The user does not exist with that id",
            });
        }

        // Actualizaciones
        const { password, google, email, ...fields } = req.body;

        if (userDB.email !== email) {
            const existeEmail = await User.findOne({ email });
            if (existeEmail) {
                return res.status(400).json({
                    ok: false,
                    error: "Email already exist",
                });
            }
        }
        if (!userDB.google) {
            fields.email = email;
        } else if (userDB.email !== email) {
            return res.status(400).json({
                ok: false,
                error: "You can't do this by entering with google",
            });
        }
        const userUpdated = await User.findByIdAndUpdate(uid, fields, { new: true });

        res.json({
            ok: true,
            user: userUpdated,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error: "unexpected error",
        });
    }
};

const deleteUser = async (req, resp) => {
    const uid = req.params.id;

    try {
        const userToDelete = await User.findById(uid);

        if (!userToDelete) {
            return resp.status(404).json({
                ok: false,
                error: "The user to delete not exist",
            });
        }

        const userDelete = await User.findByIdAndDelete(uid);
        return resp.status(200).json({
            ok: true,
            user: userDelete,
        });
    } catch (error) {
        return resp.status(500).json({
            ok: false,
            error: error,
        });
    }
};

module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser,
};
