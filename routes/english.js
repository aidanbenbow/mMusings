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

router.get('/gettingToKnowYou', (req,res)=>{
    res.render('english/gettingToKnowYou')
})

module.exports = router