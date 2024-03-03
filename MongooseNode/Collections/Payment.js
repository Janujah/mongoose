const Payment = require("mongoose");
const schema = new Payment.Schema({
    PaymentID: {
        type: String,
        required: true,
        // unique: true
    },
    PaymentMethod: {
        type: String,
        required: true
    },
    Fee: {
        type: Number,
        required: true
    },
})
const model2 =  Payment.model("Payment",schema);
module.exports = model2;