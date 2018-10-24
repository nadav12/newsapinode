
var express = require('express');
var app = express();
var getNews = require('./getNews');


// respond with "hello world" when a GET request is made to the homepage
// app.get('/headlines', function (req, res) {
//   res.send(getNews.getHeadlins())
// })
app.get('/sources', function (req, res) {
  let data = getNews.getSources()
  res.send({data });
  console.log(res );
})

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log('Example app listening on port ' + port +'!');
});
