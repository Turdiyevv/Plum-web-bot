
const {Schema, model} = require("mongoose")

const blogSchema = new Schema({
    id: {type: Number, required:true, unique: true},
    first_name: String,
    username: String,
    msgId: Number,
    msgText: String,
    isMsg: {type: Boolean, default: false},
    date: {type: Date, default: Date.now},
})
const User = model("User", blogSchema);
module.exports = User