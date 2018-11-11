const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderSchema = new Schema({
    grand_total: {type: Number, required: true},
    order_number: {type: String, required: true, max: 32},
    created_at: { type: Date, default: Date.now },
    details: [{ type: Schema.Types.ObjectId, ref: 'OrderDetail' }]
});


// Export the model
module.exports = mongoose.model('Order', OrderSchema);