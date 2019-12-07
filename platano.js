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



tapa.bindPopup("<b>Plátano!</b><br>Tapachula.<br>Según fuentes, Tapachula fue fundada por un pueblo tributario de los aztecas en 1486 por el mariscal Tiltototl, enviado a esas tierras por Ahuízotl.").openPopup();
suchiate.bindPopup("<b>Plátano!</b><br>Suchiate.<br>A su costado oriental fluye de norte a sur el Río Suchiate, del que recibe el nombre y que sirve de límite entre México y Guatemala.").openPopup();
tuxchi.bindPopup("<b>Plátano!</b><br>Tuxtla Chico.<br>Tuxtla Chico es una localidad mexicana ubicada en la parte sur del estado de Chiapas y cabecera del municipio del mismo nombre. Tuxtla, en náhuatl, significa: Lugar de conejos. Este es uno de los lugares más antiguos del Soconusco.").openPopup();
hue.bindPopup("<b>Plátano!</b><br>Huehuetán.<br>La tradición histórica refiere que el pueblo de Huehuetán, el más antiguo del Soconusco, fue fundado por el caudillo Balún Votán a su paso cuando iba a Centroamérica. ").openPopup();
hui.bindPopup("<b>Plátano!</b><br>Huixtla.<br>Huixtla originalmente Huiztlán viene del nahuatl y significa lugar donde abundan las espinas.").openPopup();
villcom.bindPopup("<b>Plátano!</b><br>Villa Comaltitlán.<br>Se localiza en los límites de la Sierra Madre de Chiapas y de la Llanura Costera del Pacífico, predominando el terreno montañoso.").openPopup();
mapas.bindPopup("<b>Plátano!</b><br>Mapastepec.<br>En este municipio se encuentra parte de las reservas de la biosfera llamadas El Triunfo y La Encrucijada.").openPopup();
aca.bindPopup("<b>Plátano!</b><br>Acapetahua.<br>Su nombre proviene del náhuatl Acatl-Petatl-Hua y se interpreta como Los que Tienen Petates de Carrizo.").openPopup();
maza.bindPopup("<b>Plátano!</b><br>Mazatán.<br> La evidencia más antigua que se conoce de la presencia humana en Mazatán son los llamados vestigios chanchutos, a la que se le atribuye una antigüedad de más de 5000 años").openPopup();




