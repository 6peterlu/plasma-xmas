window.onload = getData;

var foundcity;
var foundstate;
var foundcountry;

var locationMap = {};
locationMap["Vancouver,WA,US"] = "Peter";

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function getIdentity(city, state, country){
	
}

function getData() {
  foundcity = geoplugin_city();
  foundstate = geoplugin_region();
  foundcountry = geoplugin_countryCode();
  var assigned = document.getElementById('assignment');
  assigned.innerHTML = foundcity + "," + foundstate + "," + foundcountry;
}

