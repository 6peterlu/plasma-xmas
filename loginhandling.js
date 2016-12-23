window.onload = getData;

var foundcity;
var foundstate;
var foundcountry;

var locationMap = {};
locationMap["Vancouver,WA,US"] = "Peter";

function getData() {
  foundcity = geoplugin_city();
  foundstate = geoplugin_region();
  foundcountry = geoplugin_countryCode();
  var assigned = document.getElementById('assignment');
  assigned.innerHTML = foundcity + "," + foundstate + "," + foundcountry;
}

