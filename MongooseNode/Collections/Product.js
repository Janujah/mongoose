const Product = require("mongoose");
const schema = new Product.Schema({
    ProductID: {
        type: String,
        required: true,
        // unique: true
    },
    ProductName: {
        type: String,
        required: true
    },
    ProductCat: {
        type: String,
        required: true
    },
    ProductPrice: {
        type: Number,
        required: true
    },
    ProductQuantity: {
        type: Number,
        required: true,
    },
});
const model3 =  Product.model("Product",schema);
module.exports = model3;