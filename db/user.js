
const {Schema, model} = require("mongoose")

const blogSchema = new Schema({
    id: Number,
    first_name: String,
    username: String,
    msgId: Number,
    msgText: String,
    isMsg: Boolean,
    date: {type: Date, default: Date.now},
})
const User = model("User", blogSchema);
module.exports = User