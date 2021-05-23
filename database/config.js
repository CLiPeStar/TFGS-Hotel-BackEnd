const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

const dbConnection = () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(process.env.DB_CNN, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log("DB open");
                resolve();
            })
            .catch(() => {
                throw new Error("DB error to open");
            });
    });
};

module.exports = {
    dbConnection,
};
