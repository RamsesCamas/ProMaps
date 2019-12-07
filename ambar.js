const mymap = L.map('mapa2').setView([16.7981, -93.0166], 8);
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(mymap);
var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(mymap);
var sancris = L.marker([16.7350, -92.6375]).addTo(mymap);
var simo = L.marker([17.1406, -92.7149]).addTo(mymap);
var ostu = L.marker([17.4084, -93.3356]).addTo(mymap);
var tux = L.marker([16.7535, -93.1167]).addTo(mymap);



sancris.bindPopup("<b>Ámbar!</b><br>San Cristobal de las Casas.<br>Es conocida por su arquitectura colonial bien conservada.").openPopup();
simo.bindPopup("<b>Ámbar!</b><br>Simojovel.<br>Actualmente conocido por su producción de ámbar, más escaso, exótico y por tanto dos veces más caro que el báltico.").openPopup();
ostu.bindPopup("<b>Ámbar!</b><br>Ostuacán.<br>A partir de la década de 1970 se dio un incremento en la actividad y población de Ostuacán, principalmente por la construcción de la Presa Peñitas y el establecimiento de pozos petroleros de Petróleos Mexicanos, sin embargo, el desarrollo proporcionado por esta infraestructura no se ha visto reflejada hacia la población, que sigue teniendo únicamente servicios básicos.").openPopup();
tux.bindPopup("<b>Ámbar</b><br>Tuxtla Gutierréz.<br>Su crecimiento urbano y desarrollo económico se han acelerado desde la descentralización administrativa del gobierno, el arribo de capital nacional y extranjero que atrajo inversiones a la ciudad y el aumento de ayudas económicas al desarrollo estatal.").openPopup();


