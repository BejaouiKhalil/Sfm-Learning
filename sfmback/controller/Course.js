const express = require('express');
const router = express.Router();

const parser = require('body-parser');

const Course = require('../models/Course');

router.get('/',(req,res)=>{
    res.json('ok');
})


module.exports = router;