const Router = require('express');
const router = new Router();
const intrauserController = require('../controller/intrauser.controller');

router.post('/PostIntraUser', intrauserController.createIntraUser);
router.get('/GetIntraUser/:id', intrauserController.getIntraUser);
router.get('/GetAllIntraUser', intrauserController.getAllIntraUser);
router.put('/PutIntraUser/:id', intrauserController.updateIntraUser);
router.delete('/DeleteIntraUser/:id', intrauserController.deleteIntraUser);
router.post('/Login', intrauserController.loginIntraUser);
router.post('/GetUserByEmail', intrauserController.getUserByEmail);

module.exports = router;
