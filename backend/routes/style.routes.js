const Router = require('express');
const router = new Router();
const styleController = require('../controller/style.controller');

router.post('/PostStyle', styleController.createStyle);
router.get('/GetStyle/:id', styleController.getStyle);
router.get('/GetAllStyle', styleController.getAllStyle);
router.put('/PutStyle/:id', styleController.updateStyle);
router.delete('/DeleteStyle/:id', styleController.deleteStyle);

module.exports = router;
