function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {lat: -34.397, lng: 150.644}
    });
    var geocoder = new google.maps.Geocoder();
    var markerIcon = 'http://www.googlemapsmarkers.com/v1/009900/';

    document.getElementById('submit-color').addEventListener('click', function() {
        markerIcon = 'http://www.googlemapsmarkers.com/v1/' + document.getElementById('marker-color').value.slice(1) + '/';
        geocodeAddress(geocoder, map, markerIcon);
    });

    document.getElementById('submit-location').addEventListener('click', function() {
        geocodeAddress(geocoder, map, markerIcon);
    });
}

function geocodeAddress(geocoder, resultsMap, markerIcon) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
            marker.setIcon(markerIcon);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}