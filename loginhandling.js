window.onload = getData;

function getIdentity(foundcity, foundstate, foundcountry){
	if(foundcountry == "IN") return "Somya";
	if(foundstate == "WA") return "Peter";
	if(foundstate == "MD") return "Annie";
	if(foundstate == "TX") return "Lewis";
	if(foundstate == "NY") return "Ashley";
	if(foundstate == "CA") return "Madison";
}

function getData() {
  var foundcity = geoplugin_city();
  var foundstate = geoplugin_region();
  var foundcountry = geoplugin_countryCode();
  var user = getIdentity(foundcity, foundstate, foundcountry);
  var targets = ["Peter", "Lewis", "Annie", "Somya", "Madison", "Ashley"];
  var randomized = randomize(targets);
  var targetIndex = (randomized.indexOf(user) + 1) % targets.length;

  var assigned = document.getElementById('assignment');
  var welcome = document.getElementById('welcome');
  welcome.innerHTML = "Welcome " + user + "!";
  assigned.innerHTML = "your target is: " + randomized[targetIndex];
}

