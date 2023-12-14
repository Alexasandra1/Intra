const {Router} = require('express')
const fileMiddleware = require('../middleware/file')
const router = Router();
const uploadController = require('../controller/upload.controller');


router.post('/UploadAvatar',fileMiddleware.single('avatar'),uploadController.uploadAvatar)

module.exports = router