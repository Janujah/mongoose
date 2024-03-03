const User = require("mongoose");
const schema = new User.Schema({
    UserID: {
        type: String,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Course: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    District: {
        type: String,
        required: true
    },
})
const model1 =  User.model("User",schema);
module.exports = model1;