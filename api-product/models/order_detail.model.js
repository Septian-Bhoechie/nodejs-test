const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderDetailSchema = new Schema({
    order_id: { type: Schema.Types.ObjectId, ref: 'Order' },
    product_id: { type: Schema.Types.ObjectId, ref: 'Product' },
    price: {type: Number, required: true},
    qty: {type: Number, required: true},
    total: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('OrderDetail', OrderDetailSchema);
