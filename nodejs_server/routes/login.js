var express = require('express');
var router  = express.Router();
/* GET users listing. */
router.post('/', function(req, res, next) {
    if ((req.body.userName === 'john' && req.body.password === 'john') ||
    	(req.body.userName === 'sam' && req.body.password === 'sam')||
        (req.body.userName === 'chris' && req.body.password === 'chris')) {
        res.send({
            authentication: 'success'
        });
    } else {
        res.status(403).send({
            authentication: 'fail'
        });
    }
});
module.exports = router;
