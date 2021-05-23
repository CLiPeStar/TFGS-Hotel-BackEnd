const Receptionist = require("../models/receptionists");
const getReceptionists = (req, resp) => {
    Receptionist.find()
        .populate("user", "name img")
        .populate("hotel", "name img")
        .then((receptionist) => {
            resp.status(200).json({
                ok: "true",
                Receptionist: receptionist,
            });
        })
        .catch((err) => {
            resp.status(500).json({
                ok: false,
                error: err,
            });
        });
};
const getReceptionistById = (req, resp) => {
    const id = req.params.id;
    Receptionist.findById(id)
        .populate("user", "name img")
        .populate("hotel", "name img")
        .then((receptionist) => {
            resp.status(200).json({
                ok: "true",
                Receptionist: receptionist,
            });
        })
        .catch((err) => {
            resp.status(500).json({
                ok: false,
                error: err,
            });
        });
};
const postReceptionists = (req, resp) => {
    const uid = req.uid;
    const receptionist = new Receptionist({ user: uid, ...req.body });

    receptionist
        .save()
        .then((receptionist) => {
            resp.status(200).json({
                ok: "true",
                receptionist: receptionist,
            });
        })
        .catch((err) => {
            resp.status(500).json({
                ok: "false",
                error: err,
            });
        });
};
const putReceptionists = async (req, resp) => {
    const id = req.params.id;
    const uid = req.uid;
    try {
        const receptionist = await Receptionist.findById(id);
        if (!receptionist) {
            return resp.status(404).json({
                ok: false,
                msg: "Receptionist not found by id",
            });
        }
        const receptionistsChanges = {
            ...req.body,
            user: uid,
        };
        const receptionistsUpdated = await Receptionist.findByIdAndUpdate(id, receptionistsChanges, { new: true })
            .populate("user", "name")
            .populate("hotel", "name");
        resp.json({
            ok: true,
            Receptionists: receptionistsUpdated,
        });
    } catch (error) {
        resp.status(500).json({
            ok: false,
            error: "Talk whit your administrator",
        });
    }
};
const deleteReceptionists = async (req, resp) => {
    const id = req.params.id;
    try {
        const receptionist = await Receptionist.findById(id);
        if (!receptionist) {
            return resp.status(404).json({
                ok: false,
                msg: "receptionist not found by id",
            });
        }
        await Receptionist.findByIdAndRemove(id);

        resp.json({
            ok: true,
            msg: "receptionist deleted",
        });
    } catch (error) {
        resp.status(500).json({
            ok: false,
            error: "Talk whit your administrator",
        });
    }
};

module.exports = {
    getReceptionists,
    postReceptionists,
    putReceptionists,
    deleteReceptionists,
    getReceptionistById,
};
