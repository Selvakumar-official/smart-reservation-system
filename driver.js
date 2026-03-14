// js/driver.js

function startTracking(busId){

navigator.geolocation.watchPosition(function(position){

let lat = position.coords.latitude;
let lng = position.coords.longitude;

firebase.database()
.ref("locations/" + busId)
.set({
latitude: lat,
longitude: lng,
timestamp: Date.now()
});

console.log("Location updated:", lat, lng);

}, function(error){
console.log("Error getting location:", error);
}, {
enableHighAccuracy: true
});

alert("GPS Tracking Started");

}
