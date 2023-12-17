const db = require('../db')

class FilterController {
    async getAllDesigns(req, res) {
        try {
            const designs = await db.query('SELECT * FROM "Design" ORDER BY id');
            res.json(designs.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getAllDesignsReverse(req, res) {
        try {
            const designs = await db.query('SELECT * FROM "Design" ORDER BY id DESC');
            res.json(designs.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getDesignsByStyle1(req, res) {
        try {
            const designs = await db.query('SELECT * FROM "Design" WHERE style_id = 1 ORDER BY id');
            res.json(designs.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getDesignsByStyle1Reverse(req, res) {
        try {
            const designs = await db.query('SELECT * FROM "Design" WHERE style_id = 1 ORDER BY id DESC');
            res.json(designs.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getDesignsByStyle2(req, res) {
        try {
            const designs = await db.query('SELECT * FROM "Design" WHERE style_id = 2 ORDER BY id');
            res.json(designs.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getDesignsByStyle2Reverse(req, res) {
        try {
            const designs = await db.query('SELECT * FROM "Design" WHERE style_id = 2 ORDER BY id DESC');
            res.json(designs.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
}

module.exports = new FilterController();
