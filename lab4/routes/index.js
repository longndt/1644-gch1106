var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/mobile/list');
});

router.get('/cloud', (req, res) => {
  // res.send('<h1>Cloud Computing</h1>')
  var address = 'Số 2 Phạm Văn Bạch - Cầu Giấy - Hà Nội';
  var country = "Vietnam";
  res.render('cloud', { semester : 'Fall 2023', diachi : address, country })
})

module.exports = router;
