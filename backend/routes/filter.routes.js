const Router = require('express');
const router = new Router();
const filterController = require('../controller/filter.controller');

router.get('/GetAllDesign00', filterController.getAllDesigns);
router.get('/GetAllDesign01', filterController.getAllDesignsReverse);
router.get('/GetAllDesign10', filterController.getDesignsByStyle1);
router.get('/GetAllDesign11', filterController.getDesignsByStyle1Reverse);
router.get('/GetAllDesign20', filterController.getDesignsByStyle2);
router.get('/GetAllDesign21', filterController.getDesignsByStyle2Reverse);

module.exports = router;