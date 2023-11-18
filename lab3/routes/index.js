const express = require('express')
const router = express.Router()

// localhost:3000
router.get('/', (req, res) => {
  // views/home.hbs
  res.render('home')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/test', (req, res) => {
  var university = "Greenwich Vietnam"
  var address = "Số 2 Phạm Văn Bạch - Cầu Giấy - Hà Nội"
  var subject = "Cloud Computing"
  var country = "Vietnam"
  res.render('test',
    {
      university,
      address,
      monhoc: subject,
      year: 2023,
      country : country
    })
})

router.get('/test1', (req, res) => {
  let mobiles = ['iphone','samsung','oppo','xiaomi','sony']
  res.render('test1', { mobiles })
})

module.exports = router