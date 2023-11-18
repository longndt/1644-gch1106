const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
   res.send('<h1>This is demo page</h1>')
   console.log('this is demo result')
})

router.get('/hello', (req, res) => {
   res.render('demo/hello')
})

router.get('/admin', (req, res) => {
   res.render('demo/admin', { layout : 'admin_layout'})
})

module.exports = router