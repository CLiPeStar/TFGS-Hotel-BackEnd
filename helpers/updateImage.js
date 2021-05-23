const fs = require("fs");
const User = require("../models/user");
const Receptionist = require("../models/receptionists");
const Hotel = require("../models/hotel");

const deleteImage = (path) => {
    console.log(fs.existsSync(path));
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
};

const updateImage = async (type, id, fileName) => {
    let oldPath = "";
    switch (type) {
        case "receptionists":
            const receptionist = await Receptionist.findById(id);
            if (!receptionist) {
                console.log("Don't mach receptionist whit that id");
                return false;
            }
            oldPath = `./uploads/medicos/${receptionist.img}`;
            deleteImage(oldPath);
            receptionist.img = fileName;
            await receptionist.save();
            return true;
            break;
        case "hotels":
            const hotel = await Hotel.findById(id);
            if (!hotel) {
                console.log("Don't mach hotel whit that id");
                return false;
            }
            oldPath = `./uploads/hotels/${hotel.img}`;
            deleteImage(oldPath);
            hotel.img = fileName;
            await hotel.save();
            return true;
            break;
        case "users":
            const user = await User.findById(id);
            if (!user) {
                user.log("Don't mach user whit that id");
                return false;
            }
            oldPath = `./uploads/users/${user.img}`;
            deleteImage(oldPath);
            user.img = fileName;
            await user.save();
            return true;
            break;

        default:
            res.json({
                ok: false,
                error: "Only can search in users,receptionists,hotels",
            });
            break;
    }
};

module.exports = {
    updateImage,
};
