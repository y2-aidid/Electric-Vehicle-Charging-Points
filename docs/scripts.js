<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Map of Bristol with EV Charging Points</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: row;
        }
        #map-container {
            width: 70%;
            height: 100vh;
            position: relative;
        }
        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
        #data-container {
            width: 30%;
            height: 100vh;
            overflow-y: auto;
            padding: 10px;
            background-color: #f0f0f0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            padding: 8px;
            border-bottom: 1px solid #ddd;
            text-align: left;
        }
        th {
            background-color: #e0e0e0;
        }
    </style>
</head>
<body>
    <div id="map-container">
        <iframe id="bristolMap" src="" frameborder="0" allowfullscreen></iframe>
    </div>
    <div id="data-container">
        <h2>Charging Points</h2>
        <table id="charging-points-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody id="charging-points-body"></tbody>
        </table>
    </div>

    <script>
       
        async function loadMapWithChargingPoints() {
            const apiUrl = 'https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/21/query?where=LocationType%3D%27Electric%20Vehicle%20Charging%20Point%27&outFields=*&outSR=4326&f=json';

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

            
                if (data.error) {
                    throw new Error(`API Error: ${data.error.message}`);
                }

                
                const chargingPoints = data.features;

            
                const iframe = document.getElementById('bristolMap');
                iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.328828372484!2d-2.597298684229292!3d51.45451327962831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718f4a5a3290d5%3A0x1ec4c60792f47ba9!2sBristol!5e0!3m2!1sen!2suk!4v1620324174311!5m2!1sen!2suk';

                
                const chargingPointsBody = document.getElementById('charging-points-body');
                chargingPointsBody.innerHTML = ''; 

                chargingPoints.forEach(point => {
                    const name = point.attributes.DeviceName;
                    const description = point.attributes.LocationShDesc;
                    const address = `${point.attributes.BuildingNumber} ${point.attributes.Thoroughfare}, ${point.attributes.PostTown}, ${point.attributes.PostCode}`;

                    
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${name}</td>
                        <td>${description}</td>
                        <td>${address}</td>
                    `;
                    chargingPointsBody.appendChild(row);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        
        window.onload = loadMapWithChargingPoints;
    </script>
</body>
</html>
