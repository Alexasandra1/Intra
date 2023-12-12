const db = require('../db')
class IntraUserController{
    async createIntraUser(req, res) {
        try {
            const { role_id, name, login, password, city, phone, email, photo } = req.body;
            const existingUserLogin = await db.query('SELECT * FROM "IntraUser" WHERE login = $1', [login]);
            if (existingUserLogin && existingUserLogin.rows && existingUserLogin.rows.length > 0) {
                return res.status(400).json({error: 'Пользователь с таким логином уже существует'});
            }
            const existingUserEmail = await db.query('SELECT * FROM "IntraUser" WHERE email = $1', [email]);
            if (existingUserEmail && existingUserEmail.rows && existingUserEmail.rows.length > 0) {
                return res.status(400).json({error: 'Пользователь с такой почтой уже существует'});
            }
            const newUser = await db.query('INSERT INTO "IntraUser" (role_id, name, login, password, city, phone, email, photo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [role_id, name, login, password, city, phone, email, photo]);
            if (newUser && newUser.rows && newUser.rows.length > 0) {
                res.json({message: 'Регистрация прошла успешно'});
            } else {
                res.status(400).json({error: 'Пользователь не был создан'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
    

    async getIntraUser(req, res) {
        try {
            const { id } = req.params;
            const user = await db.query('SELECT * FROM "IntraUser" WHERE id = $1', [id]);
            if (user && user.rows && user.rows.length > 0) {
                res.json(user.rows[0]);
            } else {
                res.status(404).json({error: 'Пользователь не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getAllIntraUser(req, res) {
        try {
            const users = await db.query('SELECT * FROM "IntraUser"');
            if (users && users.rows) {
                res.json(users.rows);
            } else {
                res.status(400).json({error: 'Пользователи не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
    async loginIntraUser(req, res) {
        try {
            const { login, password } = req.body;
            const user = await db.query('SELECT * FROM "IntraUser" WHERE login = $1 AND password = $2', [login, password]);
            if (user && user.rows && user.rows.length > 0) {
                res.json(user.rows[0]);
            } else {
                res.status(400).json({error: 'Неверный логин или пароль'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
    async getUserByEmail(req, res) {
        try {
            const { email } = req.body;
            const user = await db.query('SELECT * FROM "IntraUser" WHERE email = $1', [email]);
            if (user && user.rows && user.rows.length > 0) {
                res.json(user.rows[0]);
            } else {
                res.status(404).json({error: 'Пользователь не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
    
    async updateIntraUser(req, res) {
        try {
            const { id, role_id, name, login, password, city, phone, email, photo } = req.body;
                const updatedUser = await db.query('UPDATE "IntraUser" SET role_id = $1, name = $2, login = $3, password = $4, city = $5, phone = $6, email = $7, photo = $8 WHERE id = $9 RETURNING *', [role_id, name, login, password, city, phone, email, photo, id]);
                if (updatedUser && updatedUser.rows && updatedUser.rows.length > 0) {
                    res.json(updatedUser.rows[0]);
                } else {
                    res.status(404).json({error: 'Пользователь не найден'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async deleteIntraUser(req, res) {
        try {
            const { id } = req.params;
            const deletedUser = await db.query('DELETE FROM "IntraUser" WHERE id = $1 RETURNING *', [id]);
            if (deletedUser && deletedUser.rows && deletedUser.rows.length > 0) {
                res.json({message: 'Пользователь успешно удален'});
            } else {
                res.status(404).json({error: 'Пользователь не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
}

module.exports = new IntraUserController();

