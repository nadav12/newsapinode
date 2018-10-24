const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('get your own');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
var articles = [];
var sources = [];


// newsapi.v2.topHeadlines({
//   sources: 'bbc-news,the-verge',
//   q: 'bitcoin',
//   category: 'business',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   articles = response.articles;
//   // console.log(articles);
// });

newsapi.v2.sources({
  // category: 'technology',
  // language: 'en',
  // country: 'us'
}).then(response => {

  sources = response
  // console.log(sources);


});

module.exports = {
  getHeadlins: function() {
    return articles;
  },

getSources: function() {
    return sources;
  }
};
