// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
//var mySong = {
//	"title":"24K Magic",
//	"artist":"Bruno Mars",
//	"mp3url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
//	"imageurl":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",}


var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"imageurl":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"imageurl":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"imageurl":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  

//$("body").append("<p>Title: " + mySong.title + "</p>");
//$("body").append("<p>Artist: " + mySong.artist + "</p>");
//$("body").append("<p>MP3: <a href=" + mySong.mp3url + ">Link</a></p>");
//$("body").append("<img src=" +mySong.imageurl + ">");

myPlayList.forEach(function(song){

	var title = song.title;
	var artist = song.artist;
	var url = song.mp3url;
	var image = song.imageurl;

	$("body").append(`
		
		<div class = "songs">
			
			<h3 class = "word">${title}</h3>
			<a class = "word"> ${artist}</a>
			<img src = ${image}>
			<a href = ${url}>Play Song</a>
			
		</div>

	`);

});



function displayList(){


  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}

});
