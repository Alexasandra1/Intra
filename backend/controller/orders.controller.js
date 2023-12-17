const db = require('../db')
class OrdersController{
    async createOrders(req, res) {
        try {
            const { customer_name, customer_phone, customer_email, design_id } = req.body;
                const newOrder = await db.query('INSERT INTO "Orders" (customer_name, customer_phone, customer_email, design_id) VALUES ($1, $2, $3, $4) RETURNING *', [customer_name, customer_phone, customer_email, design_id]);
                if (newOrder && newOrder.rows && newOrder.rows.length > 0) {
                    res.json({message: 'Заявка успешно отправлена'});
                } else {
                    res.status(400).json({error: 'Заказ не был создан'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getOrders(req, res) {
        try {
            const { id } = req.params;
            const order = await db.query('SELECT * FROM "Orders" WHERE id = $1', [id]);
            if (order && order.rows && order.rows.length > 0) {
                res.json(order.rows[0]);
            } else {
                res.status(404).json({error: 'Заказ не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getOrdersByDesignID(req, res) {
        try {
            const { design_id } = req.params;
            const orders = await db.query('SELECT * FROM "Orders" WHERE design_id = $1', [design_id]);
            if (orders && orders.rows) {
                res.json(orders.rows);
            } else {
                res.status(404).json({error: 'Заказы с данным ID дизайна не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getAllOrders(req, res) {
        try {
            const orders = await db.query('SELECT * FROM "Orders"');
            if (orders && orders.rows) {
                res.json(orders.rows);
            } else {
                res.status(400).json({error: 'Заказы не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async updateOrders(req, res) {
        try {
            const { id, customer_name, customer_phone, customer_email, design_id } = req.body;
                const updatedOrder = await db.query('UPDATE "Orders" SET customer_name = $1, customer_phone = $2, customer_email = $3, design_id = $4 WHERE id = $5 RETURNING *', [customer_name, customer_phone, customer_email, design_id, id]);
                if (updatedOrder && updatedOrder.rows && updatedOrder.rows.length > 0) {
                    res.json(updatedOrder.rows[0]);
                } else {
                    res.status(404).json({error: 'Заказ не найден'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async deleteOrders(req, res) {
        try {
            const { id } = req.params;
            const deletedOrder = await db.query('DELETE FROM "Orders" WHERE id = $1 RETURNING *', [id]);
            if (deletedOrder && deletedOrder.rows && deletedOrder.rows.length > 0) {
                res.json({message: 'Заказ успешно удален'});
            } else {
                res.status(404).json({error: 'Заказ не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
}

module.exports = new OrdersController();
