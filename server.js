var Twit = require('twit'),
	Firebase = require('firebase'),
	db = new Firebase('http://beergather.firebase.io'),
	config = require('./config') || {};



var twitter = new Twit({
   consumer_key:         process.env.TWITTER_API_KEY || config.TWITTER_API_KEY,
   consumer_secret:      process.env.TWITTER_API_SECRET || config.TWITTER_API_SECRET,
   access_token:         process.env.TWITTER_ACCESS_TOKEN || config.TWITTER_ACCESS_TOKEN,
   access_token_secret:  process.env.TWITTER_ACCESS_SECRET || config.TWITTER_ACCESS_SECRET
});


db.auth(proces.env.FIREBASE_AUTH || config.FIREBASE_AUTH, function() {

	//Start your junk
	//Stream digitalpourstap for realtime stuffs
	//Parse and write to DB, need to keep track of the twitter IDS and such

	//Going to need venue locations as well, names to start maybe then move to IDS

	//API

/*
	addBeer()->//New beer on tap
	replaceBeer()->//Old beer removed and new one in its place (if not in our DB then add the one it replaced just won't know start date)
	replenishBeer()->//Old beer replaced by the same beer just log it and then update the fill levels?
	removeBeer()->//No long a beer at the place/on tap

	--Does digital pours have an open online API for the beer peoples to embed on the websites. Then we can get and track fill levels!
	---Yes they do but need API Keys. Will resort to just basic yes/no of a beer but work towards the API hacking if possible or make sure that levels 
		can be added later.
*/


})

// twitter.get('statuses/user_timeline', {screen_name: 'digitalpourtaps'}, function(err, data) {
// 	console.log(JSON.stringify(data));
// })

function addBeer() {
	
}