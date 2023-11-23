var express = require('express');
var router = express.Router();
var MobileModel = require('../models/MobileModel')


router.get('/list', async (req, res) => {
   //SQL : SELECT * FROM mobile
   //Retrieve all data from mobile collection and save as an array
   var mobiles = await MobileModel.find({});
   //console.log(mobiles)
   //res.send(mobiles)
   res.render('mobile', { mobiles });
})

module.exports = router;
