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




comitan.bindPopup("<b>Cestería!</b><br>Comitán.<br>Es la ciudad más antigua de Chiapas con acta constitutiva de febrero de 1528, y el asentamiento humano históricamente en Chiapas más antiguo pues a la llegada de los españoles encontraron un poblado maya que data del periodo clásico").openPopup();
chamula.bindPopup("<b>Cestería!</b><br>San Juan Chamula.<br>San Juan Chamula es uno de los últimos lugares que aun practican la cultura maya. Los habitantes de esta localidad siguen refiriéndose al sol como (jtotik) que en español es padre, y a la Luna como i (jmetik).").openPopup();
zina.bindPopup("<b>Cestería!</b><br>Zinacantán.<br>el nombre del pueblo en la propia lengua es Sots'leb que significa Lugar de Murciélagos (Sots': murciélago y leb: locativo). El nombre Zinacantán es de origen náhuatl y tiene el mismo significado.").openPopup();
oco.bindPopup("<b>Cestería!</b><br>Ocotepec.<br>Los ríos que atraviesan el entorno de la localidad son el Cuachi y el Tombac, además de los arroyos de caudal permanentemente San Isidro y del Pueblo, así como otros arroyos de caudal estacional y más variable, como el de la Campana y de Pollón, junto con la laguna Agua Perdida.").openPopup();
teo.bindPopup("<b>Cestería!</b><br>Teopisca.<br>teopisca fue fundada en los picachos de Mispia y Chenecultie; anteriormente era llamada Ostuta. Teo significa dios y pisque cosecha; significa dios de la cosecha en raíces de origen nahuatl.").openPopup();
ama.bindPopup("<b>Cestería!</b><br>Amatenango del Valle.<br>Fue fundado por un grupo de tzeltales, que originalmente formaron el pueblo, se estableció en el municipio durante el período clásico de la época precolombina.").openPopup();
ocosingo.bindPopup("<b>Cestería!</b><br>Ocosingo.<br>Se encuentra al oriente del estado e incluye la mayor parte de la Selva Lacandona. Su cabecera es la ciudad de Ocosingo.").openPopup();