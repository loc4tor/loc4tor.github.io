function grabIp() {
    var request = new XMLHttpRequest();
	request.open('GET', 'https://api.ipify.org?format=json', false);
    request.setRequestHeader("Content-type", "application/json");
	request.send(null);

	if (request.status === 200) {
  		var obj = JSON.parse(request.responseText);
  		document.getElementById("ip").innerHTML=obj.ip;
	}
}

function grabGeo() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
  		document.getElementById("location").innerHTML = position.coords.latitude + "," + position.coords.longitude + ",5z";
    });
  }
}
