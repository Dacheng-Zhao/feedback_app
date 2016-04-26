var express = require('express');
var router  = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({
        works: [{
            id: '001',
            title: 'Sea Food Sushi',
            author: 'Japan',
            like: '1568 likes',
            comment: '35 comments',
            image: 'assets/images/src/work/1.jpg'
        }, {
            id: '002',
            title: 'Bei Jing Duck',
            author: 'China',
            like: '25800 likes',
            comment: '88 comments',
            image: 'assets/images/src/work/2.jpg'
        }, {
            id: '003',
            title: 'Shang Hai Buildings',
            author: 'Shang Hai',
            like: '25827 likes',
            comment: '730 comments',
            image: 'assets/images/src/work/3.jpg'
        }, {
            id: '004',
            title: 'Iphone 4 White',
            author: 'Steve Jobs',
            like: '27529 likes',
            comment: '181 comments',
            image: 'assets/images/src/work/4.jpg'
        }, {
            id: '005',
            title: 'New York City',
            author: 'NYC',
            like: '38327 likes',
            comment: '8524 comments',
            image: 'assets/images/src/work/5.jpg'
        }, {
            id: '006',
            title: 'Crabbing',
            author: 'John',
            like: '97205 likes',
            comment: '853 comments',
            image: 'assets/images/src/work/6.jpg'
        }, {
            id: '007',
            title: 'Mechanical Keyboard',
            author: 'Razor',
            like: '37825 likes',
            comment: '153 comments',
            image: 'assets/images/src/work/7.jpg'
        }, {
            id: '008',
            title: 'Big Mac',
            author: 'Mcdonald',
            like: '1520 likes',
            comment: '68 comments',
            image: 'assets/images/src/work/8.jpg'
        }, {
            id: '009',
            title: 'Hawaii Honolulu',
            author: 'USA',
            like: '507006 likes',
            comment: '2358 comments',
            image: 'assets/images/src/work/9.jpg'
        }, {
            id: '010',
            title: 'Alaska King Crab',
            author: 'AL',
            like: '6712 likes',
            comment: '140 comments',
            image: 'assets/images/src/work/10.jpg'
        }]
    });
});
router.delete('/:id', function(req, res, next) {
    res.send({
        status: 'success'
    })
});
module.exports = router;
