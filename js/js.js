//LEER XML de xml/questions.xml
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        gestionarXml(this);
    }
};
xhttp.open("GET", "questions.xml", true);
xhttp.send();
//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/questions.xml
// xmlDOC es el documento leido XML. 
function gestionarXml(dadesXml) {
    var xmlDoc = dadesXml.responseXML;//Parse XML to xmlDoc
   
    /*
    document.getElementById("title").innerHTML =
    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    document.getElementById("r11").innerHTML =
    xmlDoc.getElementsByTagName("option")[0].childNodes[0].nodeValue;
    document.getElementById("r12").innerHTML =
    xmlDoc.getElementsByTagName("option")[1].childNodes[0].nodeValue;
    document.getElementById("r13").innerHTML =
    xmlDoc.getElementsByTagName("option")[2].childNodes[0].nodeValue;
    document.getElementById("r14").innerHTML =
    xmlDoc.getElementsByTagName("option")[3].childNodes[0].nodeValue;
    
    document.getElementById("title2").innerHTML =
    xmlDoc.getElementsByTagName("title")[1].childNodes[0].nodeValue;
    
    document.getElementById("title3").innerHTML =
    xmlDoc.getElementsByTagName("title")[2].childNodes[0].nodeValue;
    document.getElementById("r31").innerHTML =
    xmlDoc.getElementsByTagName("option")[4].childNodes[0].nodeValue;
    document.getElementById("r32").innerHTML =
    xmlDoc.getElementsByTagName("option")[5].childNodes[0].nodeValue;
    document.getElementById("r33").innerHTML =
    xmlDoc.getElementsByTagName("option")[6].childNodes[0].nodeValue;
    */
    
    
    //SELECT 1
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var title4=xmlDoc.getElementsByTagName("title")[3].childNodes[0].nodeValue;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("pregunta_004").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("pregunta_004").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }
 ponerDatosSelectHtml(title4,opcionesSelect);
//FALTA respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].childNodes[0].nodeValue);
    
  function ponerDatosSelectHtml(t,opt){
  document.getElementById("title4").innerHTML=t;
     //RECUERDA document se refiere al documento HTML, xmlDOC es el documento leido XML.   
  var select = document.getElementsByTagName("select")[0];
  
     //Bucle para rellenar todas las opciones de select
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}
    
/*      
    
    //SELECT 2
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var title9=xmlDoc.getElementsByTagName("title")[8].childNodes[0].nodeValue;
 var opcionesSelect2 = [];
 var nopt2 = xmlDoc.getElementById("pregunta_009").getElementsByTagName('option').length;
  for (i = 0; i < nopt2; i++) { 
    opcionesSelect2[i] = xmlDoc.getElementById("pregunta_009").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }
 ponerDatosSelect2Html(title9,opcionesSelect2);
//FALTA respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].childNodes[0].nodeValue);
    
  function ponerDatosSelect2Html(t2,opt2){
  document.getElementById("title9").innerHTML=t2;
     //RECUERDA document se refiere al documento HTML, xmlDOC es el documento leido XML.   
  var select2 = document.getElementsByTagName("select")[1];
  
     //Bucle para rellenar todas las opciones de select
  for (i = 0; i < opt2.length; i++) { 
    var option2 = document.createElement("option");
    option2.text = opt2[i];
    option2.value=i+1;
    select2.options.add(option2);
 }  
}
      
   */ 
    
 //SELECT 3
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var title9=xmlDoc.getElementsByTagName("title")[8].childNodes[0].nodeValue;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("pregunta_009").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("pregunta_009").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }
 ponerDatosSelectHtml(title9,opcionesSelect);
//FALTA respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].childNodes[0].nodeValue);
    
  function ponerDatosSelectHtml(t,opt){
  document.getElementById("title9").innerHTML=t;
     //RECUERDA document se refiere al documento HTML, xmlDOC es el documento leido XML.   
  var select = document.getElementsByTagName("select")[1];
  
     //Bucle para rellenar todas las opciones de select
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}
    
    /*
    document.getElementById("title5").innerHTML =
    xmlDoc.getElementsByTagName("title")[4].childNodes[0].nodeValue;
    document.getElementById("title6").innerHTML =
    xmlDoc.getElementsByTagName("title")[5].childNodes[0].nodeValue;
    document.getElementById("title7").innerHTML =
    xmlDoc.getElementsByTagName("title")[6].childNodes[0].nodeValue;
    document.getElementById("title8").innerHTML =
    xmlDoc.getElementsByTagName("title")[7].childNodes[0].nodeValue;
    document.getElementById("title9").innerHTML =
    xmlDoc.getElementsByTagName("title")[8].childNodes[0].nodeValue;
    document.getElementById("title10").innerHTML =
    xmlDoc.getElementsByTagName("title")[9].childNodes[0].nodeValue;
    */
}
