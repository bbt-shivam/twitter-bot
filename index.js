const rwClient = require('./twitterClient.js');
const fs = require('fs');

const myTweets = fs.readFileSync("tweets.txt").toString().split('\n');
console.log('----------- App Started -----------');

const tweet = async () => {
    const tweet = myTweets[Math.floor(Math.random() * myTweets.length)];
    try {
        await rwClient.v2.tweet(tweet);
        console.log('-------------- Tweet Posted successfully -----------');
        console.log(tweet);
    } catch (error) {
        console.log(error);
    }
}

// tweet();

setInterval(function () {
    tweet();
}, 15 * 60 * 1000);