// En la variable div_links obtenemos el contenedor div con el id 'links'
var examen = document.getElementById('examen');

var xmlDoc = cargarXMLDoc('questions.xml');
if (xmlDoc != null)
{
  // Obtenemos el título del link
  var titulo = questions_tag[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;

 
}

function cargarXMLDoc(archivoXML) 
{
 var xmlDoc;

 if (window.XMLHttpRequest)
   {
    xmlDoc = new window.XMLHttpRequest();
    xmlDoc.open("GET", archivoXML, false);
    xmlDoc.send("");
    return xmlDoc.responseXML;
   }
 // para IE 5 y IE 6
 else if (ActiveXObject("Microsoft.XMLDOM"))
   {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = false;
    xmlDoc.load(archivoXML);
    return xmlDoc;
   }
 alert("Error cargando el documento.");
 return null;
}