console.log('this is loaded');

var twitterKeys = {
  consumer_key: 'UfbAeDklCqcxrEtJDos0MQbU9',
  consumer_secret: 'm9QkCww127J65niWE8OxwQ3BDXnmEMfWjKKrgt4LqQLf2RL33s',
  access_token_key: '944022299933417472-JDB0NHPe0vr7cF3iRoO3J7df8QQFzjW',
  access_token_secret: 'FrofgL8ALVDO5Ei0bzfLSwtzo1rS3gk1jaIDqbgJ3Wj2T',
}

var params = {screen_name: 'kevinsemo1'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

module.exports = twitterKeys;