var map;
var markers = [];

function initMap() {

    var geocoder = new google.maps.Geocoder();
    var markerIcon = 'http://www.googlemapsmarkers.com/v1/009900/';
    var address = {lat: 65.012088800, lng: 25.465077200};

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: address
    });

    // This event listener will call addMarker() when the map is clicked.
    map.addListener('click', function(event) {
        addMarker(event.latLng);
    });

    // Event handler for changing marker color
    document.getElementById('submit-color').addEventListener('click', function() {
        markerIcon = 'http://www.googlemapsmarkers.com/v1/' + document.getElementById('marker-color').value.slice(1) + '/';
    });

    // Event handler for changing marker icon
    document.getElementById('submit-icon').addEventListener('click', function() {
        markerIcon = document.getElementById('marker-icon').value;
    });

    // Event handler for add marker to address
    document.getElementById('submit-location').addEventListener('click', function() {
        geocodeAddress(geocoder, map, markerIcon);
    });

    // Event handler for clearing markers
    document.getElementById('clear-markers').addEventListener('click', function() {
        clearMarkers();
    });

    // Event handler for showing markers
    document.getElementById('show-markers').addEventListener('click', function() {
        showMarkers();
    });

    // Event handler for deleting markers
    document.getElementById('delete-markers').addEventListener('click', function() {
        deleteMarkers();
    });

    // Adds a marker at the center of the map.
    addMarker(address);

    //Find latlong from address
    function geocodeAddress(geocoder, resultsMap, markerIcon) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                addMarker(results[0].geometry.location);

            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    // Adds a marker to the map and push to the array.
    function addMarker(location) {
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
        marker.setIcon(markerIcon);
        markers.push(marker);
    }

    // Sets the map on all markers in the array.
    function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }

    // Removes the markers from the map, but keeps them in the array.
    function clearMarkers() {
        setMapOnAll(null);
    }

    // Shows any markers currently in the array.
    function showMarkers() {
        setMapOnAll(map);
    }

    // Deletes all markers in the array by removing references to them.
    function deleteMarkers() {
        clearMarkers();
        markers = [];
    }

}

