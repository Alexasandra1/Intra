const db = require('../db')
class DesignController{
    async createDesign(req, res) {
        try {
            const { name, designer_id, year, style_id, price, photo_id, consultant_id, room_id } = req.body;
                const newDesign = await db.query('INSERT INTO "Design" (name, designer_id, year, style_id, price, photo_id, consultant_id, room_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [name, designer_id, year, style_id, price, photo_id, consultant_id, room_id]);
                if (newDesign && newDesign.rows && newDesign.rows.length > 0) {
                    res.json({message:'Дизайн был добавлен в вашу библиотеку'});
                } else {
                    res.status(400).json({error: 'Дизайн не был создан'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getDesign(req, res) {
        try {
            const { id } = req.params;
            const design = await db.query('SELECT * FROM "Design" WHERE id = $1', [id]);
            if (design && design.rows && design.rows.length > 0) {
                res.json(design.rows[0]);
            } else {
                res.status(404).json({error: 'Дизайн не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getDesignByDesignerID(req, res) {
        try {
            const { designer_id } = req.params;
            const designs = await db.query('SELECT * FROM "Design" WHERE designer_id = $1', [designer_id]);
            if (designs && designs.rows) {
                res.json(designs.rows);
            } else {
                res.status(404).json({error: 'Дизайны данного дизайнера не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getDesignByStyle(req, res) {
        try {
            const { style_id } = req.params;
            const designs = await db.query('SELECT * FROM "Design" WHERE style_id = $1', [style_id]);
            if (designs && designs.rows) {
                res.json(designs.rows);
            } else {
                res.status(404).json({error: 'Дизайны данного стиля не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getDesignByRoom(req, res) {
        try {
            const { room_id } = req.params;
            const designs = await db.query('SELECT * FROM "Design" WHERE room_id = $1', [room_id]);
            if (designs && designs.rows) {
                res.json(designs.rows);
            } else {
                res.status(404).json({error: 'Дизайны для данной комнаты не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getAllDesign(req, res) {
        try {
            const designs = await db.query('SELECT * FROM "Design"');
            if (designs && designs.rows) {
                res.json(designs.rows);
            } else {
                res.status(400).json({error: 'Дизайны не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async updateDesign(req, res) {
        try {
            const { id, name, designer_id, year, style_id, price, photo_id, consultant_id, room_id } = req.body;
                const updatedDesign = await db.query('UPDATE "Design" SET name = $1, designer_id = $2, year = $3, style_id = $4, price = $5, photo_id = $6, consultant_id = $7, room_id = $8 WHERE id = $9 RETURNING *', [name, designer_id, year, style_id, price, photo_id, consultant_id, room_id, id]);
                if (updatedDesign && updatedDesign.rows && updatedDesign.rows.length > 0) {
                    res.json(updatedDesign.rows[0]);
                } else {
                    res.status(404).json({error: 'Дизайн не найден'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async deleteDesign(req, res) {
        try {
            const { id } = req.params;
            const deletedDesign = await db.query('DELETE FROM "Design" WHERE id = $1 RETURNING *', [id]);
            if (deletedDesign && deletedDesign.rows && deletedDesign.rows.length > 0) {
                res.json({message: 'Дизайн успешно удален'});
            } else {
                res.status(404).json({error: 'Дизайн не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
}

module.exports = new DesignController();
