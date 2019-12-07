const mymap = L.map('mapa6').setView([16.7981, -93.0166], 8);
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(mymap);
var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(mymap);
var caco = L.marker([14.9936, -92.1654]).addTo(mymap);
var tuxchi = L.marker([14.9367, -92.1678]).addTo(mymap);
var meta = L.marker([14.8400 , -92.1886]).addTo(mymap);
var hue = L.marker([15.0189, -92.3858]).addTo(mymap);


caco.bindPopup("<b>Rambután!</b><br>Cacahoatán.").openPopup();
tuxchi.bindPopup("<b>Rambután!</b><br>Tuxtla Chico.").openPopup();
meta.bindPopup("<b>Rambután!</b><br>Metapa.").openPopup();
hue.bindPopup("<b>Rambután!</b><br>Huehuetán.").openPopup();
