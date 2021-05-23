const { v4: uuidv4 } = require("uuid");
const { updateImage } = require("../helpers/updateImage");
const path = require("path");
const fs = require("fs");

const fileUpload = (req, res) => {
    const type = req.params.type;
    const id = req.params.id;

    const validTypes = ["receptionists", "users", "hotels"];
    if (!validTypes.includes(type)) {
        return res.status(500).json({
            ok: false,
            error: "the type must be receptionists, users or hotels",
        });
    }
    //Validar que existe archivo
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ msg: "No files were uploaded." });
    }

    //Procesar img
    const file = req.files.imagen;
    const nameSplit = file.name.split(".");
    const fileExtension = nameSplit[nameSplit.length - 1];

    //Validar extension
    const validExtensions = ["png", "jpg", "jpeg", "gif"];
    if (!validExtensions.includes(fileExtension)) {
        return res.status(500).json({
            ok: false,
            msg: "The file extension is not valid",
        });
    }

    //Generar nombre del archivo
    const fileName = `${uuidv4()}.${fileExtension}`;

    //Path
    const path = `./uploads/${type}/${fileName}`;
    file.mv(path, (err) => {
        if (err) return res.status(500).json({ ok: false, error: err });

        //Actualizar DB
        updateImage(type, id, fileName);
        res.json({
            ok: true,
            msg: "File upload",
            fileName: fileName,
        });
    });
};

const getImg = (req, res) => {
    const type = req.params.type;
    const photo = req.params.photo;

    let pathImg = path.join(__dirname, `../uploads/${type}/${photo}`);

    //imagen por defecto
    if (!fs.existsSync(pathImg)) {
        pathImg = path.join(__dirname, `../uploads/no-img.jpg`);
        return res.sendFile(pathImg);
    }
    res.sendFile(pathImg);
};

module.exports = {
    fileUpload,
    getImg,
};
