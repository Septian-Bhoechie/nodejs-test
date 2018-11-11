const Product = require('../models/product.model');
const Order = require('../models/order.model');
const OrderDetail = require('../models/order_detail.model');

exports.submit = function (req, res) {

		let order = new Order(
				{
						grand_total: 0,
						order_number: Math.floor(Math.random() * 11);
				}
		);

		order.save(function (err) {
				if (err) {
						return next(err);
				}

				var grandTotal = 0;

				Product.find({
					'_id': { $in: req.body.ids }
				}).exec(function(err2, products) {
						if (err2) {
								return next(err2);
						}
						else {
							products.forEach( function(product, index) {
								if (product && product._id) {
										let orderDetail = new OrderDetail(
												{
														order_id: order._id,
														product_id: product._id,
														price: product.price,
														qty: req.body.qtys[product._id];
														total: parseInt(req.body.qtys[product._id]) * product.price;
												}
										);
										orderDetail.save(function (err3) {
											if (!err3) {
													grandTotal += orderDetail.total;
											}
										});
								}
							});
						}

						//if all products was insert to order details
						//update order grand total
						order.grand_total = grandTotal;
						order.save(function(err3) {
							if (err3) {
								return next(err3);
							}

							Order
								.findById(order._id).
								.populate('details'). // only works if we pushed refs to children
								.exec(function (err4, orderResult) {
									if (err4) {
										return next(err3);
									}

									res.send(orderResult);
								});
						});
				});
		})
};