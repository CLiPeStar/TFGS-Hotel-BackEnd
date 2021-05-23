const Hotel = require("../models/hotel");

const getHotels = (req, resp) => {
    Hotel.find()
        .populate("user", "name img")
        .then((hotels) => {
            resp.status(200).json({
                ok: "true",
                hotel: hotels,
            });
        })
        .catch((err) => {
            resp.status(500).json({
                ok: "false",
                error: err,
            });
        });
};
const postHotels = async (req, resp) => {
    const uid = req.uid;
    const hotel = new Hotel({ user: uid, ...req.body });

    await hotel
        .save()
        .then((hotelDB) => {
            resp.json({
                ok: "true",
                hotel: hotelDB,
            });
        })
        .catch((err) => {
            resp.status(500).json({
                ok: "false",
                error: err,
            });
        });
};
const putHotels = async (req, resp) => {
    const id = req.params.id;
    const uid = req.uid;
    try {
        const hotel = await Hotel.findById(id);
        if (!hotel) {
            return resp.status(404).json({
                ok: false,
                msg: "Hotel not found by id",
            });
        }
        const changeHotel = {
            ...req.body,
            usuario: uid,
        };
        const hotelUpdated = await Hotel.findByIdAndUpdate(id, changeHotel, { new: true }).populate("user", "name");
        resp.json({
            ok: true,
            hotel: hotelUpdated,
        });
    } catch (error) {
        resp.status(500).json({
            ok: false,
            error: "talk to the administrator",
        });
    }
};
const deleteHotels = async (req, resp) => {
    const id = req.params.id;
    try {
        const hotel = await Hotel.findById(id);
        if (!hotel) {
            return resp.status(404).json({
                ok: false,
                msg: "Hotel not found by id",
            });
        }
        await Hotel.findByIdAndRemove(id);

        resp.json({
            ok: true,
            msg: "Hotel deleted",
        });
    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: "talk to the administrator",
        });
    }
};

module.exports = {
    getHotels,
    postHotels,
    putHotels,
    deleteHotels,
};
