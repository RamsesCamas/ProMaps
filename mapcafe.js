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


coita.bindPopup("<b>Café!</b><br>Ocozocuautla de Espinosa.<br>El término Ocozocoautla es de origen náhuatl; viene de los vocablos ocotzotl, ocozote y cuauhtla, bosque; es decir ocotzocuauhtla, Bosque del ocozote").openPopup();
sancris.bindPopup("<b>Café!</b><br>San Cristobal de las Casas.<br>Es conocida por su arquitectura colonial bien conservada.").openPopup();
copa.bindPopup("<b>Café!</b><br>Copainalá.<br>Copainalá es un pueblo de origen prehispánico, fundado y habitado mayoritariamente hasta la actualidad por indígenas zoques, cobró notoriedad durante mucho tiempo debido a que ha sido identificada con la población de Painalá").openPopup();
comitan.bindPopup("<b>Café!</b><br>Comitán de Domínguez.<br>Es la ciudad más antigua de Chiapas con acta constitutiva de febrero de 1528, y el asentamiento humano históricamente en Chiapas más antiguo pues a la llegada de los españoles encontraron un poblado maya que data del periodo clásico").openPopup();
angel.bindPopup("<b>Café!</b><br>Ángel Albino Corzo.<br>ecibe su nombre en honor al político y militar chiapacorceño, Ángel Albino Corzo. Cuenta con 28 883 habitantes según el censo de población del año 2000").openPopup();
pichu.bindPopup("<b>Café!</b><br>Pichucalco.<br>La población de Pichucalco fue fundada en 1660 por un grupo de indios zoques y chontales, dedicados al cultivo del cacao y la crianza de puercos, y le dieron el nombre de Santo Domingo Pichucalco.").openPopup();
bochil.bindPopup("<b>Café!</b><br>Bochil.<br>La zona donde hoy se asienta Bochil estuvo habitado desde tiempos antiguos por grupos indígenas tzotziles, descendientes de los antiguos mayas que poblaban la región, en el año de 1486 estos grupos fueron conquistados por los aztecas al mando de Jitotol, quien conquistó gran parte de los que hoy es Chiapas para los aztecas en tiempos del Huey tlatoani Ahuízotl").openPopup();
palenque.bindPopup("<b>Café!</b><br>Palenque.<br>Palenque es una ciudad y centro ceremonial muy antigua que data de los siglos 3 o 4 de la antigua era, se han realizados expediciones y trabajos para poder saber qué es lo que se realizaba en esa época .").openPopup();
ocosingo.bindPopup("<b>Café!</b><br>Ocosingo.<br>Se encuentra al oriente del estado e incluye la mayor parte de la Selva Lacandona. Su cabecera es la ciudad de Ocosingo.").openPopup();
yaja.bindPopup("<b>Café!</b><br>Yajalón.<br>En 1562, fue fundado el pueblo de Yajalón por fray Pedro Lorenzo, trasladándolo de Ocot").openPopup();
moto.bindPopup("<b>Café!</b><br>Motozintla.<br>Durante la época colonial fue una doctrina de los frailes mercedarios que tuvieron sus reducciones en la región; posteriormente, en 1754 cuando los frailes entregaron las reducciones al clero secular fue parte del curato de Cuilco.").openPopup();
tapa.bindPopup("<b>Café!</b><br>Tapachula.<br>Según fuentes, Tapachula fue fundada por un pueblo tributario de los aztecas en 1486 por el mariscal Tiltototl, enviado a esas tierras por Ahuízotl.").openPopup();
