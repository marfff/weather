const express = require('express');
const router = express.Router();
router.get('/', (req,res)=>{
    res.render('404');
});

module.exports = router;
