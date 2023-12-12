const Router = require('express');
const router = new Router();
const designController = require('../controller/design.controller');

router.post('/PostDesign', designController.createDesign);
router.get('/GetDesign/:id', designController.getDesign);
router.get('/GetDesignByDesignerID/:designer_id', designController.getDesignByDesignerID);
router.get('/GetDesignByStyle/:style_id', designController.getDesignByStyle);
router.get('/GetDesignByRoom/:room_id', designController.getDesignByRoom);
router.get('/GetAllDesign', designController.getAllDesign);
router.put('/PutDesign/:id', designController.updateDesign);
router.delete('/DeleteDesign/:id', designController.deleteDesign);

module.exports = router;