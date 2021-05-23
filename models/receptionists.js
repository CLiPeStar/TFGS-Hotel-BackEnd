const { Schema, model } = require("mongoose");

const receptionistSchema = Schema(
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
        hotel: {
            require: true,
            type: Schema.Types.ObjectId,
            ref: "Hotel",
        },
    },
    { collection: "receptionists" }
);

receptionistSchema.method("toJSON", function () {
    const { __v, ...object } = this.toObject();

    return object;
});
module.exports = model("Receptionist", receptionistSchema);