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


palenque.bindPopup("<b>Jade!</b><br>Palenque.<br>Palenque es una ciudad y centro ceremonial muy antigua que data de los siglos 3 o 4 de la antigua era, se han realizados expediciones y trabajos para poder saber qué es lo que se realizaba en esa época .").openPopup();
sancris.bindPopup("<b>Jade!</b><br>San Cristobal de las Casas.<br>Es conocida por su arquitectura colonial bien conservada.").openPopup();
