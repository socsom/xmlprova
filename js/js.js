var formElement=null;
var textoSecreto=null;
var textoSecreto2=null;
var respuestaSelect=null;
var respuestaSelect2=null;
var respuestasCheckbox2 = [];
var respuestasCheckbox = [];



var nota = 0;  //nota de la prueba sobre 3 puntos (hay 3 preguntas)

//**************************************************************************************************** 
//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function(){ 

 //CORREGIR al apretar el botón
 formElement=document.getElementById('myform');
 formElement.onsubmit=function(){
   inicializar();
   corregirRadio()
   corregirTexto();
   corregirCheckbox();	
   corregirSelect();  
   corregirMselect();
   corregirRadio2();
   corregirTexto2();
   corregirCheckbox2();
   corregirSelect2();
   corregirMselect2();

  presentarNota();  
  reintentar();
  document.getElementById("resultadosDiv").style.display="block";
  document.getElementById('resultadosDiv').scrollIntoView();
   return false;
 }





//LEER XML de xml/questions.xml
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        gestionarXml(this);
    }
};
xhttp.open("GET", "xml/questions.xml", true);
xhttp.send();
//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/questions.xml
// xmlDOC es el documento leido XML. 
function gestionarXml(dadesXml) {
    var xmlDoc = dadesXml.responseXML;//Parse XML to xmlDoc
   
      
    //***************************************************************************************************NUMBER1
 //Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
 var title2=xmlDoc.getElementsByTagName("title")[1].childNodes[0].nodeValue;
 ponerDatosInputHtml(title2);
// RESPUESTA FALTA!!numeroSecreto=parseInt(xmlDoc.getElementsByTagName("answer")[0].childNodes[0].nodeValue);
    textoSecreto=xmlDoc.getElementsByTagName("answer")[1].childNodes[0].nodeValue;
    function ponerDatosInputHtml(t){
 document.getElementById("title2").innerHTML = t;
}
    
   //***************************************************************************************************NUMBER2
 //Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
 var title7=xmlDoc.getElementsByTagName("title")[6].childNodes[0].nodeValue;
 ponerDatosInputHtml2(title7);
// RESPUESTA FALTA!!numeroSecreto=parseInt(xmlDoc.getElementsByTagName("answer")[0].childNodes[0].nodeValue);
    textoSecreto2=xmlDoc.getElementsByTagName("answer")[8].childNodes[0].nodeValue;
    function ponerDatosInputHtml2(t){
 document.getElementById("title7").innerHTML = t;
}
 
    

    //**************************************************************************************************SELECT 1
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var title4=xmlDoc.getElementsByTagName("title")[3].childNodes[0].nodeValue;
 var opcionesSelect = [];
 var nopt4 = xmlDoc.getElementById("pregunta_004").getElementsByTagName('option').length;
  for (i = 0; i < nopt4; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("pregunta_004").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }
 ponerDatosSelectHtml(title4,opcionesSelect);
//RESPUESTA FALTA respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].childNodes[0].nodeValue);
    respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[4].innerHTML);
    
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
       
    
    //********************************************************************************************************SELECT 2
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var title9=xmlDoc.getElementsByTagName("title")[8].childNodes[0].nodeValue;
 var opcionesSelect2 = [];
 var nopt9 = xmlDoc.getElementById("pregunta_009").getElementsByTagName('option').length;
  for (i = 0; i < nopt9; i++) { 
    opcionesSelect2[i] = xmlDoc.getElementById("pregunta_009").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }
 ponerDatosSelect2Html(title9,opcionesSelect2);
//FALTA respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].childNodes[0].nodeValue);
    respuestaSelect2=parseInt(xmlDoc.getElementsByTagName("answer")[11].innerHTML);
    
  function ponerDatosSelect2Html(t,opt){
  document.getElementById("title9").innerHTML=t;
     //RECUERDA document se refiere al documento HTML, xmlDOC es el documento leido XML.   
  var select = document.getElementsByTagName("select")[2];
  
     //Bucle para rellenar todas las opciones de select
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}

 
    
    //**************************************************************************************************MSELECT 1
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var title5=xmlDoc.getElementsByTagName("title")[4].childNodes[0].nodeValue;
 var opcionesMSelect = [];
 var nopt5 = xmlDoc.getElementById("pregunta_005").getElementsByTagName('option').length;
  for (i = 0; i < nopt5; i++) { 
    opcionesMSelect[i] = xmlDoc.getElementById("pregunta_005").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }
 ponerDatosMSelectHtml(title5,opcionesMSelect);
//RESPUESTA FALTA respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].childNodes[0].nodeValue);
   
  function ponerDatosMSelectHtml(t,opt){
  document.getElementById("title5").innerHTML=t;
     //RECUERDA document se refiere al documento HTML, xmlDOC es el documento leido XML.   
  var mSelect = document.getElementsByTagName("select")[1];
  
     //Bucle para rellenar todas las opciones de select
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    mSelect.options.add(option);
 }  
}
   
   
     //**************************************************************************************************MSELECT 2
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var title10=xmlDoc.getElementsByTagName("title")[9].childNodes[0].nodeValue;
 var opcionesMSelect2 = [];
 var nopt10 = xmlDoc.getElementById("pregunta_010").getElementsByTagName('option').length;
  for (i = 0; i < nopt10; i++) { 
    opcionesMSelect2[i] = xmlDoc.getElementById("pregunta_010").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }
 ponerDatosMSelectHtml2(title10,opcionesMSelect2);
//RESPUESTA FALTA respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].childNodes[0].nodeValue);
    
  function ponerDatosMSelectHtml2(t,opt){
  document.getElementById("title10").innerHTML=t;
     //RECUERDA document se refiere al documento HTML, xmlDOC es el documento leido XML.   
  var mSelect = document.getElementsByTagName("select")[3];
  
     //Bucle para rellenar todas las opciones de select
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    mSelect.options.add(option);
 }  
}
     
    
    
  //***********************************************************************************************************CHECKBOX
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var title3 = xmlDoc.getElementsByTagName("title")[2].childNodes[0].nodeValue;
 var opcionesCheckbox = [];
 var nopt3 = xmlDoc.getElementById("pregunta_003").getElementsByTagName('option').length;
 for (i = 0; i < nopt3; i++) { 
    opcionesCheckbox[i]=xmlDoc.getElementById("pregunta_003").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }  
 ponerDatosCheckboxHtml(title3,opcionesCheckbox);
 var nres = xmlDoc.getElementById("pregunta_003").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox[i]=xmlDoc.getElementById("pregunta_003").getElementsByTagName("answer")[i].innerHTML;
 }
    
    /* RESPUESTAS
 var nres = xmlDoc.getElementById("preguntas_003").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox[i]=xmlDoc.getElementById("preguntas_003").getElementsByTagName("answer")[i].childNodes[0].nodeValue;
 }
} 
*/
 
function ponerDatosCheckboxHtml(t,opt){
 var checkboxContainer=document.getElementById('title3');
 var h3 = document.createElement("h3");
 h3.innerHTML = t;
 checkboxContainer.appendChild(h3); 
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
 }  
}
    
  //***********************************************************************************************************CHECKBOX2
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var title8 = xmlDoc.getElementsByTagName("title")[7].childNodes[0].nodeValue;
 var opcionesCheckbox2 = [];
 var nopt8 = xmlDoc.getElementById("pregunta_008").getElementsByTagName('option').length;
 for (i = 0; i < nopt8; i++) { 
    opcionesCheckbox2[i]=xmlDoc.getElementById("pregunta_008").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }  
 ponerDatosCheckbox2Html(title8,opcionesCheckbox2);
 var nres2 = xmlDoc.getElementById("pregunta_008").getElementsByTagName('answer').length;
 for (i = 0; i < nres2; i++) { 
  respuestasCheckbox2[i]=xmlDoc.getElementById("pregunta_008").getElementsByTagName("answer")[i].innerHTML;
 }
    
    /* RESPUESTAS
 var nres = xmlDoc.getElementById("preguntas_003").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox[i]=xmlDoc.getElementById("preguntas_003").getElementsByTagName("answer")[i].childNodes[0].nodeValue;
 }
} 
*/
 
function ponerDatosCheckbox2Html(t,opt){
 var checkboxContainer=document.getElementById('title8');
 var h3 = document.createElement("h3");
 h3.innerHTML = t;
 checkboxContainer.appendChild(h3); 
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color2_"+i);
    input.type="checkbox";
    input.name="color2";
    input.id="color2_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
 }  
}  
   //***********************************************************************************************************RADIO
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var title6 = xmlDoc.getElementsByTagName("title")[5].childNodes[0].nodeValue;
 var opcionesRadio = [];
 var nopt6 = xmlDoc.getElementById("pregunta_006").getElementsByTagName('option').length;
 for (i = 0; i < nopt6; i++) { 
    opcionesRadio[i]=xmlDoc.getElementById("pregunta_006").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }  
 ponerDatosRadioHtml(title6,opcionesRadio);
	 
	
 /* RESPUESTAS
 var nres = xmlDoc.getElementById("preguntas_003").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox[i]=xmlDoc.getElementById("preguntas_003").getElementsByTagName("answer")[i].childNodes[0].nodeValue;
 }
} 
*/
 
function ponerDatosRadioHtml(t,opt){
 var radioContainer=document.getElementById('title6');
 var h3 = document.createElement("h3");
 h3.innerHTML = t;
 radioContainer.appendChild(h3); 
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "colorR1_"+i);
    input.type="radio";
    input.name="colorR1";
    input.id="colorR1_"+i;;    
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
 }  
}    

      //***********************************************************************************************************RADIO2
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var title1 = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
 var opcionesRadio2 = [];
 var nopt1 = xmlDoc.getElementById("pregunta_001").getElementsByTagName('option').length;
 for (i = 0; i < nopt1; i++) { 
    opcionesRadio2[i]=xmlDoc.getElementById("pregunta_001").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }  
 ponerDatosRadio2Html(title1,opcionesRadio2);
 respuestaRadio2=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);
 /* RESPUESTAS
 var nres = xmlDoc.getElementById("preguntas_003").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox[i]=xmlDoc.getElementById("preguntas_003").getElementsByTagName("answer")[i].childNodes[0].nodeValue;
 }
} 
*/
 
 

function ponerDatosRadio2Html(t,opt){
 var radioContainer=document.getElementById('title1');
 var h3 = document.createElement("h3");
 h3.innerHTML = t;
 radioContainer.appendChild(h3); 
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "colorR2_"+i);
    input.type="radio";
    input.name="colorR2";
    input.id="colorR2_"+i;
   radioContainer.appendChild(input);
    radioContainer.appendChild(label);
 }  
}    
 
    
}
    
//*******************************************************************************************************************************
//implementación de la corrección

function corregirRadio2(){
	darRespuestaHtml("P6 : PENDIENTE");
}

function corregirMselect(){
	darRespuestaHtml("P5 : PENDIENTE");
	
}

function corregirMselect2(){
	darRespuestaHtml("P10 : PENDIENTE");
}
function corregirRadio(){
	darRespuestaHtml("P1 : PENDIENTE");
}

	
function corregirTexto(){
  //Vosotros debéis comparar el texto escrito con el texto que hay en el xml
  //en este ejemplo hace una comparación de números enteros
  var s=formElement.elements[4].value;    
  if (s==textoSecreto) {
   darRespuestaHtml("P2: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P2: Incorrecto");
 
}

function corregirSelect(){
  //Compara el índice seleccionado con el valor del íncide que hay en el xml (<answer>2</answer>)
  //para implementarlo con type radio, usar value para enumerar las opciones <input type='radio' value='1'>...
  //luego comparar ese value con el value guardado en answer
  var sel = formElement.elements[9];  
  if (sel.selectedIndex==respuestaSelect) {
   darRespuestaHtml("P4: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P4: Incorrecto");
}

function corregirTexto2(){
  //Vosotros debéis comparar el texto escrito con el texto que hay en el xml
  //en este ejemplo hace una comparación de números enteros
  var s2=formElement.elements[15].value;   
  if (s2==textoSecreto2) {
   darRespuestaHtml("P7: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P7: Incorrecto");
 
}

function corregirSelect2(){
  //Compara el índice seleccionado con el valor del íncide que hay en el xml (<answer>2</answer>)
  //para implementarlo con type radio, usar value para enumerar las opciones <input type='radio' value='1'>...
  //luego comparar ese value con el value guardado en answer
  var sel = formElement.elements[20];  
  if (sel.selectedIndex==respuestaSelect2) {
   darRespuestaHtml("P9: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P9: Incorrecto");
}



//Si necesitáis ayuda para hacer un corregirRadio() decirlo, lo ideal es que a podáis construirla modificando corregirCheckbox
function corregirCheckbox(){
  //Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color.length; i++) {  //"color" es el nombre asignado a todos los checkbox
   if (f.color[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasCheckbox.length; j++) {
     if (i==respuestasCheckbox[j]) escorrecta[i]=true;
    }

    if (escorrecta[i]) {
     nota +=1.0/respuestasCheckbox.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P3: "+i+" correcta");    
    } else {
     nota -=1.0/respuestasCheckbox.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P3: "+i+" incorrecta");
    }   
   }
  }
}	
	
	
	
//Si necesitáis ayuda para hacer un corregirRadio() decirlo, lo ideal es que a podáis construirla modificando corregirCheckbox
function corregirCheckbox2(){
  //Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color2.length; i++) {  //"color" es el nombre asignado a todos los checkbox
   if (f.color2[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasCheckbox2.length; j++) {
     if (i==respuestasCheckbox2[j]) escorrecta[i]=true;
    }

    if (escorrecta[i]) {
     nota +=1.0/respuestasCheckbox2.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P8: "+i+" correcta");    
    } else {
     nota -=1.0/respuestasCheckbox2.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P8: "+i+" incorrecta");
    }   
   }
  }
}



    
 //****************************************************************************************************************************   
//Gestionar la presentación de las respuestas
function darRespuestaHtml(r){
 var p = document.createElement("p");
 var node = document.createTextNode(r);
 p.appendChild(node);
 document.getElementById('resultadosDiv').appendChild(p);
}

function presentarNota(){
   darRespuestaHtml("Nota: "+nota+" puntos sobre 10");
	
}

function inicializar(){
   document.getElementById('resultadosDiv').innerHTML = "";
   nota=0.0;
}
//****************************************************************************************************************
function reintentar() {
	var btn = document.createElement("BUTTON");
	var t = document.createTextNode("Reintentar");
	btn.appendChild(t);
	document.getElementById('resultadosDiv').appendChild(btn); 
	btn.onclick =function(){
	window.location.reload(true);
	}
}
}
