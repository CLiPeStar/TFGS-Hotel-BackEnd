const { Schema, model } = require("mongoose");

const hotelSchema = Schema(
    {
        name: {
            type: String,
            require: true,
        },
        img: {
            type: String,
        },
        user: {
            require: true,
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { collection: "hotels" }
);

hotelSchema.method("toJSON", function () {
    const { __v, ...object } = this.toObject();

    return object;
});
module.exports = model("Hotel", hotelSchema);
