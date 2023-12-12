const db = require('../db');

class RoomTypeController{
    async createRoomType(req, res) {
        try {
            const { room } = req.body;
                const newRoomType = await db.query('INSERT INTO "Room_type" (room) VALUES ($1) RETURNING *', [room]);
                if (newRoomType && newRoomType.rows && newRoomType.rows.length > 0) {
                    res.json(newRoomType.rows[0]);
                } else {
                    res.status(400).json({error: 'Тип комнаты не был создан'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getRoomType(req, res) {
        try {
            const { id } = req.params;
            const roomType = await db.query('SELECT * FROM "Room_type" WHERE id = $1', [id]);
            if (roomType && roomType.rows && roomType.rows.length > 0) {
                res.json(roomType.rows[0]);
            } else {
                res.status(404).json({error: 'Тип комнаты не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getAllRoomType(req, res) {
        try {
            const roomTypes = await db.query('SELECT * FROM "Room_type"');
            if (roomTypes && roomTypes.rows) {
                res.json(roomTypes.rows);
            } else {
                res.status(400).json({error: 'Типы комнат не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async updateRoomType(req, res) {
        try {
            const { id, room } = req.body;
                const updatedRoomType = await db.query('UPDATE "Room_type" SET room = $1 WHERE id = $2 RETURNING *', [room, id]);
                if (updatedRoomType && updatedRoomType.rows && updatedRoomType.rows.length > 0) {
                    res.json(updatedRoomType.rows[0]);
                } else {
                    res.status(404).json({error: 'Тип комнаты не найден'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async deleteRoomType(req, res) {
        try {
            const { id } = req.params;
            const deletedRoomType = await db.query('DELETE FROM "Room_type" WHERE id = $1 RETURNING *', [id]);
            if (deletedRoomType && deletedRoomType.rows && deletedRoomType.rows.length > 0) {
                res.json({message: 'Тип комнаты успешно удален'});
            } else {
                res.status(404).json({error: 'Тип комнаты не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
}

module.exports = new RoomTypeController();
