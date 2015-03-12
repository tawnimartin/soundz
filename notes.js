var stream;
SC.stream("/tracks/293", function(sound){
  stream = sound
console.log("loaded");
});



stream.play()

stream.volume(30)

stream.pause()

https://developers.soundcloud.com/docs/api/guide


SC.get('/tracks', { genres: "rock" }, function(tracks) {
	console.log(tracks);
});

//GET url, options hash and callback

SC.get('/tracks', { q: "deftones" }, function(tracks) {
	console.log(tracks);
});


SC.get('/tracks', { q: "deftones", genres: "rap" }, function(tracks) {
	console.log(tracks);
});


there is a field
u need to check that not give you the play btn if its not streamable
streamable: true 

var t = new TrackCollection()

tracks.loadGenre();


functions themselves have methods - call and apply also bind

You can bind a context to a function... will return a copy of that function 

bind


var a = function(){
	console.log(this);<-- this will refer to the obj foo bar
};
a();
//window

var b = a.bind({foo: "bar"});
b()
//{foo: "bar"}

a.bind(foo);
returns a new copy of that function but the this will always refer to that

use it only if youre not going to use that funciton anywhere else
use

//creates a copy of that anonymous function with the context bound to this.



//
var tracks = new TrackCollection();
tracks.loadGenre("rock");
tracks.first().get("title");


tracks.last().play();

tracks.first().id

tracks.search("chevelle")
tracks.last().play();
tracks.last().pause();
//

var tracks = new TrackCollection()
tracks.search("black keys")
var view = new TrackView({model: tracks.first(), el: "body"});
view.render();
tracks.first().toJSON();





tracks = new TrackCollection()
tracks.search("black keys")
var view = new TrackView({collection: tracks});
$("body").append(view.render().el);


var router = new Router()
undefined
router.loadGenre("alternative")
undefined
router.loadGenre("punk")
undefined






sidebar with different genres
list of btns that say genre names.  click on it and load genre using router to load that genre
search page - search bar to enter search terms enter search show songs matching - use router for that
back forward nav and bkmarking need to work
main nav area to allow you to jump btwn both screens
or you can call genres tracks

if you are on main nav and you click earch you won't have a keyword.... have it show filed and let you enter search

	easy mode just make the genre screens

hard - search for this kyword in this genre
they all start playing at the same time







