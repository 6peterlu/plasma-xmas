(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.onload = getData;

function getIdentity(foundcity, foundstate, foundcountry){
	if(foundcountry == "IN") return "Somya";
	if(foundstate == "WA") return "Peter";
	if(foundstate == "MD") return "Annie";
	if(foundstate == "TX") return "Lewis";
	if(foundstate == "NY") return "Ashley";
	if(foundstate == "CA") return "Madison";
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

},{}]},{},[1]);
