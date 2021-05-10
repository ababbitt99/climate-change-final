let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.052425, lng: -75.405792 },
    zoom: 10,
  });
}
