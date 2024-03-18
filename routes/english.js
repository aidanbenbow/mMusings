const express = require('express'),
router = express.Router()


router.get('/', (req,res)=>{
    res.render('english/index')
})

router.get('/creation', (req,res)=>{
    res.render('english/creation')
})

router.get('/animal', (req,res)=>{
    res.render('english/animal')
})

module.exports = router