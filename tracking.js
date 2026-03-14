// js/tracking.js

let map;
let marker;

function initMap(){

map = new google.maps.Map(document.getElementById("map"),{
zoom:15,
center:{lat:13.0827,lng:80.2707}
});

marker = new google.maps.Marker({
map:map
});

}

initMap();

firebase.database()
.ref("locations/bus1")
.on("value", function(snapshot){

let data = snapshot.val();

let position = {
lat: data.latitude,
lng: data.longitude
};

marker.setPosition(position);
map.setCenter(position);

});
