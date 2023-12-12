const db = require('../db');
class StyleController{
    async createStyle(req, res) {
        try {
            const { style_name } = req.body;
                const newStyle = await db.query('INSERT INTO "Style" (style_name) VALUES ($1) RETURNING *', [style_name]);
                if (newStyle && newStyle.rows && newStyle.rows.length > 0) {
                    res.json(newStyle.rows[0]);
                } else {
                    res.status(400).json({error: 'Стиль не был создан'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getStyle(req, res) {
        try {
            const { id } = req.params;
            const style = await db.query('SELECT * FROM "Style" WHERE id = $1', [id]);
            if (style && style.rows && style.rows.length > 0) {
                res.json(style.rows[0]);
            } else {
                res.status(404).json({error: 'Стиль не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getAllStyle(req, res) {
        try {
            const styles = await db.query('SELECT * FROM "Style"');
            if (styles && styles.rows) {
                res.json(styles.rows);
            } else {
                res.status(400).json({error: 'Стили не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async updateStyle(req, res) {
        try {
            const { id, style_name } = req.body;
                const updatedStyle = await db.query('UPDATE "Style" SET style_name = $1 WHERE id = $2 RETURNING *', [style_name, id]);
                if (updatedStyle && updatedStyle.rows && updatedStyle.rows.length > 0) {
                    res.json(updatedStyle.rows[0]);
                } else {
                    res.status(404).json({error: 'Стиль не найден'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async deleteStyle(req, res) {
        try {
            const { id } = req.params;
            const deletedStyle = await db.query('DELETE FROM "Style" WHERE id = $1 RETURNING *', [id]);
            if (deletedStyle && deletedStyle.rows && deletedStyle.rows.length > 0) {
                res.json({message: 'Стиль успешно удален'});
            } else {
                res.status(404).json({error: 'Стиль не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
}

module.exports = new StyleController();
