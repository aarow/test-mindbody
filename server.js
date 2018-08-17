var express = require('express');
var app = express();
var  MindBodyAPI = require('./src/apis/classes');

const API_KEY = '6ecfe973fc164871aea1c9007f873983';
const SITE_ID = '522673';
const HOST = 'http://api.mindbodyonline.com';
const GET_CLASSES_URL = 'http://clients.mindbodyonline.com/api/0_5/GetClasses';
const SOURCE_PASSWORD = 'zRMg8RlMVvLFMSnM5b0izhI6tJw=';
const SOURCE_USER = 'VexYoga';

// const MindBodyAPI = require('mindbody-node-client');
var  mindBodyAPI = new MindBodyAPI({
  sourceName: 'VexYoga',
  sourcePassword: 'zRMg8RlMVvLFMSnM5b0izhI6tJw=',
  siteID: '-99',
  username: 'Siteowner',
  password: 'apitest1234',
});

app.use(express.static(__dirname + '/public'));
app.listen(4000);

app.get('/classschedule', function(req, res) {
    mindBodyAPI.GetClassSchedules()
        .then(result => {
            res.json(result.GetClassSchedulesResult.ClassSchedules.ClassSchedule);
        })
})

console.log('Server running on port 4000');