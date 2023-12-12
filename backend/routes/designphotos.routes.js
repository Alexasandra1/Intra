const Router = require('express');
const router = new Router();
const designphotosController = require('../controller/designphotos.controller');

router.post('/PostDesignPhoto', designphotosController.addDesignPhoto);
router.get('/GetDesignPhoto/:id', designphotosController.getDesignPhoto);
router.get('/GetAllDesignPhoto', designphotosController.getAllDesignPhotos);
router.put('/PutDesignPhoto/:id', designphotosController.updateDesignPhoto);
router.delete('/DeleteDesignPhoto/:id', designphotosController.deleteDesignPhoto);

module.exports = router;
