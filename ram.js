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


caco.bindPopup("<b>Rambután!</b><br>Cacahoatán.<br>La villa de Cacahoatán fue fundada por los toltecas, su significado es “Lugar del cacao” . Su asiento anterior o primitivo estaba al otro lado del río Cahuacán.").openPopup();
tuxchi.bindPopup("<b>Rambután!</b><br>Tuxtla Chico.<br>Tuxtla Chico es una localidad mexicana ubicada en la parte sur del estado de Chiapas y cabecera del municipio del mismo nombre. Tuxtla, en náhuatl, significa: Lugar de conejos. Este es uno de los lugares más antiguos del Soconusco.").openPopup();
meta.bindPopup("<b>Rambután!</b><br>Metapa.<br> Metapa, el significado etimológico es “Río de los magueyes”, fue una aldea de la antigua provincia del Xoconochco. ").openPopup();
hue.bindPopup("<b>Rambután!</b><br>Huehuetán.<br>La tradición histórica refiere que el pueblo de Huehuetán, el más antiguo del Soconusco, fue fundado por el caudillo Balún Votán a su paso cuando iba a Centroamérica.").openPopup();
