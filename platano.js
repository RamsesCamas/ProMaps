const mymap = L.map('mapa3').setView([16.7981, -93.0166], 8);
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(mymap);
var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(mymap);
var tapa = L.marker([14.8990, -92.2672]).addTo(mymap);
var suchiate = L.marker([14.6251, -92.2439]).addTo(mymap);
var tuxchi = L.marker([14.9367, -92.1678]).addTo(mymap);
var hue = L.marker([15.0189, -92.3858]).addTo(mymap);
var hui = L.marker([15.1391, -92.4663]).addTo(mymap);
var villcom = L.marker([15.2137, -92.5752]).addTo(mymap);
var mapas = L.marker([15.4377, -92.8966]).addTo(mymap);
var aca = L.marker([15.2806, -92.6905]).addTo(mymap);
var maza = L.marker([14.8627, -92.4500]).addTo(mymap);



tapa.bindPopup("<b>Plátano!</b><br>Tapachula.").openPopup();
suchiate.bindPopup("<b>Plátano!</b><br>Suchiate.").openPopup();
tuxchi.bindPopup("<b>Plátano!</b><br>Tuxtla Chico.").openPopup();
hue.bindPopup("<b>Plátano!</b><br>Huehuetán.").openPopup();
hui.bindPopup("<b>Plátano!</b><br>Huixtla.").openPopup();
villcom.bindPopup("<b>Plátano!</b><br>Villa Comltitlán.").openPopup();
mapas.bindPopup("<b>Plátano!</b><br>Mapastepec.").openPopup();
aca.bindPopup("<b>Plátano!</b><br>Acapetahua.").openPopup();
maza.bindPopup("<b>Plátano!</b><br>Mazatán.").openPopup();




