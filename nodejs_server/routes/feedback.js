var express = require('express');
var fs = require("fs");
var router = express.Router();

router.get('/', function(req, res, next) {
    var json = readJsonFileSync();
    var userId = req.query.userId;
    var feedbacks = [];
    for (var index = 0; index < json.feedbacks.length; index++) {
        if (json.feedbacks[index].userId === userId) {
            feedbacks.unshift(json.feedbacks[index]);
        }
    }
    res.send({
        file: feedbacks
    });
});

router.post('/', function(req, res, next) {
    var json = readJsonFileSync();
    var newFeedback = req.body;
    json.feedbacks.push(newFeedback);
    var newFile = JSON.stringify(json);
    var saved = false;
    fs.writeFileSync("json/feedback.json", newFile, 'utf8');
    res.send({
        saved: 'success'
    });
});

function readJsonFileSync() {
    var file = fs.readFileSync("json/feedback.json", 'utf8');
    return JSON.parse(file);
}

module.exports = router;
