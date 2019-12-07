const mymap = L.map('mapa1').setView([16.7981, -93.0166], 8);
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(mymap);
var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(mymap);
var sancris = L.marker([16.7350, -92.6375]).addTo(mymap);
var simo = L.marker([16.7350, -92.6375]).addTo(mymap);
var ostu = L.marker([17.4084, -93.3356]).addTo(mymap);
var tux = L.marker([16.7535, -93.1167]).addTo(mymap);



sancris.bindPopup("<b>Café!</b><br>San Cristobal de las Casas.").openPopup();
simo.bindPopup("<b>Café!</b><br>Simojovel.").openPopup();
ostu.bindPopup("<b>Café!</b><br>Ostuacán.").openPopup();
tux.bindPopup("<b>Café!</b><br>Tuxtla Gutierréz.").openPopup();


