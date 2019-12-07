const mymap = L.map('mapa5').setView([16.7981, -93.0166], 8);
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(mymap);
var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(mymap);
var palenque = L.marker([17.5080, -91.9863]).addTo(mymap);
var sancris = L.marker([16.7350, -92.6375]).addTo(mymap);


palenque.bindPopup("<b>Jade!</b><br>Palenque.").openPopup();
sancris.bindPopup("<b>Jade!</b><br>San Cristobal de las Casas.").openPopup();
