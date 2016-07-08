var lat = null;
var long = null;
var map = null;
function initialize() {
  setTimeout(function() {
    map = new google.maps.Map(document.getElementById('mapa'));

    map.setCenter(new google.maps.LatLng(lat, long));
    map.setZoom(14);
  }, 7000);
}
function getLocation() {
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
   }
 }
 function showPosition(position) {
   lat = position.coords.latitude;
   long = position.coords.longitude;
 }

function add_marker(lat, long, title){
   var myLatLng = {lat: lat, lng: long};
   var marker = new google.maps.Marker({
       position: myLatLng,
       map: map,
       title: title
   });
 }
 getLocation();

var ready = function(){
  geo = {
    add: function(lat, long, title){
      var myLatLng = {lat: lat, lng: long};
      var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: title
      });
    }
  }
}
