const mymap = L.map('mapa1').setView([16.7981, -93.0166], 8);
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(mymap);
var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(mymap);
var coita = L.marker([16.7600, -93.3750]).addTo(mymap);
var sancris = L.marker([16.7350, -92.6375]).addTo(mymap);
var copa = L.marker([17.0946, -93.2110]).addTo(mymap);
var comitan = L.marker([16.2389, -92.1276]).addTo(mymap);
var angel = L.marker([15.8241, -92.6851]).addTo(mymap);
var pichu = L.marker([17.5093, -93.1184]).addTo(mymap);
var bochil = L.marker([16.9970, -92.8979]).addTo(mymap);
var palenque = L.marker([17.5080, -91.9863]).addTo(mymap);
var ocosingo = L.marker([16.9063, -92.0934]).addTo(mymap);
var yaja = L.marker([17.1737, -92.3339]).addTo(mymap);
var moto = L.marker([15.3621, -92.2483]).addTo(mymap);
var tapa = L.marker([14.8990, -92.2672]).addTo(mymap);


coita.bindPopup("<b>Café!</b><br>Ocozocuautla de Espinosa.").openPopup();
sancris.bindPopup("<b>Café!</b><br>San Cristobal de las Casas.").openPopup();
copa.bindPopup("<b>Café!</b><br>Copainalá.").openPopup();
comitan.bindPopup("<b>Café!</b><br>Comitán de Domínguez.").openPopup();
angel.bindPopup("<b>Café!</b><br>Ángel Albino Corzo.").openPopup();
pichu.bindPopup("<b>Café!</b><br>Pichucalco.").openPopup();
bochil.bindPopup("<b>Café!</b><br>Bochil.").openPopup();
palenque.bindPopup("<b>Café!</b><br>Palenque.").openPopup();
ocosingo.bindPopup("<b>Café!</b><br>Ocosingo.").openPopup();
yaja.bindPopup("<b>Café!</b><br>Yajalón.").openPopup();
moto.bindPopup("<b>Café!</b><br>Motozintla.").openPopup();
tapa.bindPopup("<b>Café!</b><br>Tapachula.").openPopup();
