{}
    {}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Map of EV Charger Points in Bristol</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }
        #map {
            height: 100vh;
            width: 100%;
        }
    </style>
</head>
<body>
    <div id="map"></div>

    <script>
        function initMap() {
            const bristol = { lat: 51.4545, lng: -2.5879 }; // Bristol coordinates
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 12,
                center: bristol,
            });

            // Load EV charger points from JSON file
            fetch('ev_charger_points.json')
                .then(response => response.json())
                .then(data => {
                    data.forEach(point => {
                        new google.maps.Marker({
                            position: { lat: point.latitude, lng: point.longitude },
                            map: map,
                            title: point.name
                        });
                    });
                })
                .catch(error => console.error('Error loading EV charger points:', error));
        }
    </script>

    <!-- Include Google Maps API script -->
    <!-- Replace "YOUR_API_KEY" with your actual Google Maps API key -->
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
</body>
</html>
    }
