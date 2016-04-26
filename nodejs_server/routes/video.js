var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({
        video: [{
            id: '1',
            imgSrc: '//i.ytimg.com/vi_webp/ejBkOjEG6F0/mqdefault.webp',
            title: 'Angular The First 50 Minutes',
            src: 'https://www.youtube.com/embed/ejBkOjEG6F0'
        }, {
            id: '2',
            imgSrc: '//i.ytimg.com/vi/MyqcsnbH820/mqdefault.jpg',
            title: 'AngularJS 2',
            src: 'https://www.youtube.com/embed/MyqcsnbH820'
        }, {
            id: '3',
            imgSrc: '//i.ytimg.com/vi_webp/8zbAFSJCPSI/mqdefault.webp',
            title: 'Apple 2016 Keynote',
            src: 'https://www.youtube.com/embed/8zbAFSJCPSI'
        }, {
            id: '4',
            imgSrc: '//i.ytimg.com/vi_webp/vhEGEAD4P98/mqdefault.webp',
            title: 'Nodjs',
            src: 'https://www.youtube.com/embed/vhEGEAD4P98'
        }, {
            id: '5',
            imgSrc: '//i.ytimg.com/vi_webp/W-WihPoEbR4/mqdefault.webp',
            title: 'MangoDB',
            src: 'https://www.youtube.com/embed/W-WihPoEbR4'
        }, {
            id: '6',
            imgSrc: '//i.ytimg.com/vi_webp/59cIRELecI0/mqdefault.webp',
            title: '[FULL] Building Responsive UI with Bootstrap 6- hours - Full sample code',
            src: 'https://www.youtube.com/embed/59cIRELecI0'
        }, {
            id: '7',
            imgSrc: '//i.ytimg.com/vi_webp/rTd_B3-f15g/mqdefault.webp',
            title: '[Bootstrap 3] - LESSON 18: CREATING A DATA TABLE AND MODIFYING IT USING FOOTABLE',
            src: 'https://www.youtube.com/embed/rTd_B3-f15g'
        }, {
            id: '8',
            imgSrc: '//i.ytimg.com/vi_webp/ELRNFtFxIs8/mqdefault.webp',
            title: 'Zero to Hero with jQuery',
            src: 'https://www.youtube.com/embed/ELRNFtFxIs8'
        }, {
            id: '9',
            imgSrc: '//i.ytimg.com/vi_webp/BWXggB-T1jQ/mqdefault.webp',
            title: 'JQuery Tutorial',
            src: 'https://www.youtube.com/embed/BWXggB-T1jQ'
        }, {
            id: '10',
            imgSrc: '//i.ytimg.com/vi/VRnQOcVclS8/mqdefault.jpg',
            title: 'JavaScript & jQuery Tutorial for Beginners - 1 of 9 - Getting Started',
            src: 'https://www.youtube.com/embed/VRnQOcVclS8'
        }, {
            id: '11',
            imgSrc: '//i.ytimg.com/vi_webp/G-POtu9J-m4/mqdefault.webp',
            title: 'jQuery Tutorial #2 - Event Binding - jQuery Tutorial for Beginners',
            src: 'https://www.youtube.com/embed/G-POtu9J-m4'
        }]
    });
});
module.exports = router;
