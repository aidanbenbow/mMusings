const express = require('express'),
router = express.Router()

router.get('/', (req,res)=>{
    res.render('games/index')
})

router.get('/guessWord', (req,res)=>{
    res.render('games/guessWord')
})

module.exports = router