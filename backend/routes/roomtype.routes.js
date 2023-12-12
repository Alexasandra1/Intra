const Router = require('express');
const router = new Router();
const roomtypeController = require('../controller/roomtype.controller');

router.post('/PostRoomType', roomtypeController.createRoomType);
router.get('/GetRoomType/:id', roomtypeController.getRoomType);
router.get('/GetAllRoomType', roomtypeController.getAllRoomType);
router.put('/PutRoomType/:id', roomtypeController.updateRoomType);
router.delete('/DeleteRoomType/:id', roomtypeController.deleteRoomType);

module.exports = router;
