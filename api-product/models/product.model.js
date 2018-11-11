const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    created_at: { type: Date, default: Date.now },
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);