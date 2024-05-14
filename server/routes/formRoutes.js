const express = require('express');
const router = express.Router();
const verifyToken=require('../middleware/verifytoken');

const FormController = require('../controller/formRoutes');
const Excel= require('../controller/ExcelRoutes');

router.post('/form-submit', FormController.Form);
router.get('/get-form-data',verifyToken, FormController.GetFormdata);
router.get('/download-excel',Excel);

module.exports = router;