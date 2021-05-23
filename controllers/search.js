// getTodo
const { response } = require("express");
const User = require("../models/user");
const Receptionists = require("../models/receptionists");
const Hotel = require("../models/hotel");

const getAll = (req, res = response) => {
    const search = req.params.search;
    const regex = new RegExp(search, "i");

    Promise.all([User.find({ name: regex }), Receptionists.find({ name: regex }), Hotel.find({ name: regex })])
        .then(([users, receptionists, hotels]) => {
            res.json({
                ok: true,
                users,
                receptionists,
                hotels,
            });
        })
        .catch((err) => {
            res.status(400).json({
                ok: true,
                erros: err,
            });
        });
};
const getCollectionFileds = (req, res = response) => {
    const search = req.params.search;
    const table = req.params.table;

    const regex = new RegExp(search, "i");
    switch (table) {
        case "receptionists":
            Receptionists.find({ name: regex }).then((receptionists) => {
                res.json({
                    ok: true,
                    result: receptionists,
                });
            });
            break;
        case "hotels":
            Hotel.find({ name: regex }).then((hotels) => {
                res.json({
                    ok: true,
                    result: hotels,
                });
            });
            break;
        case "users":
            User.find({ name: regex }).then((users) => {
                res.json({
                    ok: true,
                    result: users,
                });
            });
            break;

        default:
            res.json({
                ok: false,
                msg: "Only can search in users,receptionists,hotels",
            });
            break;
    }
};

module.exports = {
    getAll,
    getCollectionFileds,
};
