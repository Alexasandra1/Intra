const db = require('../db')

class DesignPhotosController{
    async addDesignPhoto(req, res) {
        try {
            const { photos } = req.body;
                const newPhoto = await db.query('INSERT INTO "Design_photos" (photos) VALUES ($1) RETURNING *', [photos]);
                if (newPhoto && newPhoto.rows && newPhoto.rows.length > 0) {
                    res.json(newPhoto.rows[0]);
                } else {
                    res.status(400).json({error: 'Фото дизайна не было добавлено'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getDesignPhoto(req, res) {
        try {
            const { id } = req.params;
            const photo = await db.query('SELECT * FROM "Design_photos" WHERE id = $1', [id]);
            if (photo && photo.rows && photo.rows.length > 0) {
                res.json(photo.rows[0]);
            } else {
                res.status(404).json({error: 'Фото дизайна не найдено'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getAllDesignPhotos(req, res) {
        try {
            const photos = await db.query('SELECT * FROM "Design_photos"');
            if (photos && photos.rows) {
                res.json(photos.rows);
            } else {
                res.status(400).json({error: 'Фото дизайна не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async updateDesignPhoto(req, res) {
        try {
            const { id, photos } = req.body;
                const updatedPhoto = await db.query('UPDATE "Design_photos" SET photos = $1 WHERE id = $2 RETURNING *', [photos, id]);
                if (updatedPhoto && updatedPhoto.rows && updatedPhoto.rows.length > 0) {
                    res.json(updatedPhoto.rows[0]);
                } else {
                    res.status(404).json({error: 'Фото дизайна не найдено'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async deleteDesignPhoto(req, res) {
        try {
            const { id } = req.params;
            const deletedPhoto = await db.query('DELETE FROM "Design_photos" WHERE id = $1 RETURNING *', [id]);
            if (deletedPhoto && deletedPhoto.rows && deletedPhoto.rows.length > 0) {
                res.json({message: 'Фото дизайна успешно удалено'});
            } else {
                res.status(404).json({error: 'Фото дизайна не найдено'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
}

module.exports = new DesignPhotosController();
