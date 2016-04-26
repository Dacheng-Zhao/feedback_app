var express = require('express');
var router  = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({
        profiles: [{
            username: 'John',
            nickname: 'The Smart Kid',
            profileImage: 'assets/images/src/profile/smartkid.jpg'
        }, {
            username: 'Sam',
            nickname: 'The Strong Kid',
            profileImage: 'assets/images/src/profile/strongkid.jpg'
        },
        {
            username: 'Chris',
            nickname: 'The Happy Kid',
            profileImage: 'assets/images/src/profile/happykid.jpg'
        }]
    });
});
module.exports = router;
