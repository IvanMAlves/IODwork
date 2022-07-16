var Sentiment = require('sentiment');
var sentiment = new npmSentiment();
var result = sentiment.analyze('Cats are cute.');
console.dir(result);