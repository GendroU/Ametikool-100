let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 58.256413, lng: 22.483178 },
    zoom: 16,
  });
}

window.initMap = initMap;