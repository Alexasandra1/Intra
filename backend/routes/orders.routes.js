const Router = require('express');
const router = new Router();
const ordersController = require('../controller/orders.controller');

router.post('/PostOrders', ordersController.createOrders);
router.get('/GetOrders/:id', ordersController.getOrders);
router.get('/GetOrdersByDesignID/:design_id', ordersController.getOrdersByDesignID);
router.get('/GetAllOrders', ordersController.getAllOrders);
router.put('/PutOrders/:id', ordersController.updateOrders);
router.delete('/DeleteOrders/:id', ordersController.deleteOrders);

module.exports = router;
