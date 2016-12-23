var shuffleSeed = require('shuffle-seed')
window.onload = getData;

function getIdentity(foundcity, foundstate, foundcountry){
	var photo = document.getElementById('photo');
	if(foundcountry == "IN") {
		photo.src = "Somya.jpeg";
		return "Somya";
	}
	if(foundstate == "WA") {}
		photo.src = "Peter.jpeg";
		return "Peter";
	}
	if(foundstate == "MD") {}
		photo.src = "Annie.jpeg";
		return "Annie";
	}
	if(foundstate == "TX") {
		photo.src = "Lewis.jpeg";
		return "Lewis";
	}
	if(foundstate == "NY") {}
		photo.src = "Ashley.jpeg";
		return "Ashley";
	}
	if(foundstate == "CA") {
		photo.src = "Madison.jpeg";
		return "Madison";
	}
}

/*
Annie's hard work is commemorated here
var seeder = function(){
 var seed = [];
 return {
  set:function(length){
    for( var i = 0; i < length; i++ ){
        seed.push(Math.random());
    }
    return seed;
  },
  get: function(){
   return seed;
  },
  clear: function(){
   seed = []; 
  }
 };
}

function randomShuffle(ar,seed){
	var numbers = [];
	for( var a = 0, max = ar.length; a < max; a++){
		numbers.push(a);
	}
	var shuffled = [];
	for( var i = 0, len = ar.length; i < len; i++ ){
	    var r = parseInt(seed[i] * (len - i));
	    shuffled.push(ar[numbers[r]]);
	    numbers.splice(r,1);
	}
	return shuffled;
}

function randomize(targets) {
	var seed = seeder();
	seed.set(targets.length);
	return randomShuffle(targets, seed.get);
}
*/

function getData() {
  var foundcity = geoplugin_city();
  var foundstate = geoplugin_region();
  var foundcountry = geoplugin_countryCode();
  var user = getIdentity(foundcity, foundstate, foundcountry);
  var targets = ["Peter", "Lewis", "Annie", "Somya", "Madison", "Ashley"];
  var seed = "p-love";
  var randomized = shuffleSeed.shuffle(targets, seed);
  var targetIndex = (randomized.indexOf(user) + 1) % targets.length;
  console.log(targetIndex)
  console.log(randomized)

  var assigned = document.getElementById('assignment');
  var welcome = document.getElementById('welcome');

  welcome.innerHTML = "Welcome " + user + "!";
  assigned.innerHTML = "your target is: " + randomized[targetIndex];

}
