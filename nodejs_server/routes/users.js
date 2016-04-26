var express = require('express');
var router  = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    if (req.query.user === 'john') {
        res.send({
            name: 'John'
        });
    } else if(req.query.user==='chris'){
    	res.send({
    		name:'Chris'
    	});
    }else {
        res.send({
            name: 'Sam'
        });
    }
});
module.exports = router;
