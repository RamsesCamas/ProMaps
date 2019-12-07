const mymap = L.map('mapa4').setView([16.7981, -93.0166], 8);
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(mymap);
var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(mymap);
var comitan = L.marker([16.2389, -92.1276]).addTo(mymap);
var chamula = L.marker([16.7806, -92.6934]).addTo(mymap);
var zina = L.marker([16.7584, -92.7190]).addTo(mymap);
var oco = L.marker([17.2251, -93.1648]).addTo(mymap);
var tec = L.marker([17.1362, -93.3107]).addTo(mymap);
var teo = L.marker([16.5436, -92.4746]).addTo(mymap);
var ama = L.marker([16.5286, -92.4350]).addTo(mymap);
var ocosingo = L.marker([16.9063, -92.0934]).addTo(mymap);




comitan.bindPopup("<b>Cestería!</b><br>Comitán.").openPopup();
chamula.bindPopup("<b>Cestería!</b><br>San Juan Chamula.").openPopup();
zina.bindPopup("<b>Cestería!</b><br>Zinacantán.").openPopup();
oco.bindPopup("<b>Cestería!</b><br>Ocotepec.").openPopup();
tec.bindPopup("<b>Cestería!</b><br>Tecpatán.").openPopup();
teo.bindPopup("<b>Cestería!</b><br>Teopisca.").openPopup();
ama.bindPopup("<b>Cestería!</b><br>Amatenango del Valle.").openPopup();
ocosingo.bindPopup("<b>Cestería!</b><br>Ocosingo.").openPopup();