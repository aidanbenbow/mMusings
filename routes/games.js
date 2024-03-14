const express = require('express'),
router = express.Router()

router.get('/', (req,res)=>{
    res.render('games/index')
})

router.get('/guessWord', (req,res)=>{
    res.render('games/guessWord')
})

router.get('/WordGuess', (req,res)=>{
    res.render('games/wordGuess')
})

router.get('/animals', (req,res)=>{
    res.render('games/animals')
})

module.exports = router