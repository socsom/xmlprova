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
   corregirTexto();
   corregirSelect();  
   corregirTexto2();
   corregirSelect2();
   corregirCheckbox2();
   corregirCheckbox();
 
  presentarNota();   
   return false;
 };
 
 //LEER XML de xml/preguntas.xml
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   gestionarXml(this);
  }
 };
 xhttp.open("GET", "xml/preguntas.xml", true);
 xhttp.send();
};

//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/preguntas.xml
// xmlDOC es el documento leido XML. 
function gestionarXml(dadesXml){
 var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc
 
 //TEXT
 //Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
 var tituloInput=xmlDoc.getElementsByTagName("title")[0].innerHTML;
 
 ponerDatosInputHtml(tituloInput);

 textoSecreto=xmlDoc.getElementsByTagName("answer")[0].childNodes[0].nodeValue;
 
 
 //SELECT
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var tituloSelect=xmlDoc.getElementsByTagName("title")[1].innerHTML;
 var opcionesSelect = [];
 var nopt2 = xmlDoc.getElementById("profe_002").getElementsByTagName('option').length;
  for (i = 0; i < nopt2; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("profe_002").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml(tituloSelect,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].innerHTML);

 //TEXT2
 var tituloInput2=xmlDoc.getElementsByTagName("title")[2].innerHTML;
  ponerDatosInputHtml2(tituloInput2);
 textoSecreto2=xmlDoc.getElementsByTagName("answer")[2].childNodes[0].nodeValue;
 
 
 
 //SELECT2
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var tituloSelect2=xmlDoc.getElementsByTagName("title")[3].innerHTML;
 var opcionesSelect2 = [];
 var nopt4 = xmlDoc.getElementById("profe_004").getElementsByTagName('option').length;
  for (i = 0; i < nopt4; i++) { 
    opcionesSelect2[i] = xmlDoc.getElementById("profe_004").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml2(tituloSelect2,opcionesSelect2);
 respuestaSelect2=parseInt(xmlDoc.getElementsByTagName("answer")[3].innerHTML);
 
 //CHECKBOX2
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var tituloCheckbox2 = xmlDoc.getElementsByTagName("title")[4].innerHTML;
 var opcionesCheckbox2 = [];
 var nopt5 = xmlDoc.getElementById("profe_005").getElementsByTagName('option').length;
 for (i = 0; i < nopt5; i++) { 
    opcionesCheckbox2[i]=xmlDoc.getElementById("profe_005").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosCheckboxHtml2(tituloCheckbox2,opcionesCheckbox2);
 var nres2 = xmlDoc.getElementById("profe_006").getElementsByTagName('answer').length;
 for (i = 0; i < nres2; i++) { 
  respuestasCheckbox2[i]=xmlDoc.getElementById("profe_005").getElementsByTagName("answer")[i].innerHTML;
 }
 

 
  
 //CHECKBOX
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var tituloCheckbox = xmlDoc.getElementsByTagName("title")[5].innerHTML;
 var opcionesCheckbox = [];
 var nopt6 = xmlDoc.getElementById("profe_006").getElementsByTagName('option').length;
 for (i = 0; i < nopt6; i++) { 
    opcionesCheckbox[i]=xmlDoc.getElementById("profe_006").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosCheckboxHtml(tituloCheckbox,opcionesCheckbox);
 var nres = xmlDoc.getElementById("profe_006").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox[i]=xmlDoc.getElementById("profe_006").getElementsByTagName("answer")[i].innerHTML;
 }
 

 
}


//****************************************************************************************************
//implementación de la corrección

function corregirTexto(){
  //Vosotros debéis comparar el texto escrito con el texto que hay en el xml
  //en este ejemplo hace una comparación de números enteros
  var s=formElement.elements[0].value;    
  if (s==textoSecreto) {
   darRespuestaHtml("P1: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P1: Incorrecto");
 
}

function corregirSelect(){
  //Compara el índice seleccionado con el valor del íncide que hay en el xml (<answer>2</answer>)
  //para implementarlo con type radio, usar value para enumerar las opciones <input type='radio' value='1'>...
  //luego comparar ese value con el value guardado en answer
  var sel = formElement.elements[1];  
  if (sel.selectedIndex==respuestaSelect) {
   darRespuestaHtml("P2: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P2: Incorrecto");
}

function corregirTexto2(){
  //Vosotros debéis comparar el texto escrito con el texto que hay en el xml
  //en este ejemplo hace una comparación de números enteros
  var s2=formElement.elements[2].value;   
  if (s2==textoSecreto2) {
   darRespuestaHtml("P3: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P3: Incorrecto");
 
}

function corregirSelect2(){
  //Compara el índice seleccionado con el valor del íncide que hay en el xml (<answer>2</answer>)
  //para implementarlo con type radio, usar value para enumerar las opciones <input type='radio' value='1'>...
  //luego comparar ese value con el value guardado en answer
  var sel = formElement.elements[3];  
  if (sel.selectedIndex==respuestaSelect2) {
   darRespuestaHtml("P4: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P4: Incorrecto");
}

//Si necesitáis ayuda para hacer un corregirRadio() decirlo, lo ideal es que a podáis construirla modificando corregirCheckbox
function corregirCheckbox2(){
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
     darRespuestaHtml("P5: "+i+" correcta");    
    } else {
     nota -=1.0/respuestasCheckbox.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P5: "+i+" incorrecta");
    }   
   }
  }
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
     darRespuestaHtml("P6: "+i+" correcta");    
    } else {
     nota -=1.0/respuestasCheckbox.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P6: "+i+" incorrecta");
    }   
   }
  }
}


//****************************************************************************************************
// poner los datos recibios en el HTML
function ponerDatosInputHtml(t){
 document.getElementById("tituloInput").innerHTML = t;
}
function ponerDatosInputHtml2(t){
 document.getElementById("tituloInput2").innerHTML = t;
}
function ponerDatosSelectHtml(t,opt){
  document.getElementById("tituloSelect").innerHTML=t;
  var select = document.getElementsByTagName("select")[0];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}
function ponerDatosSelectHtml2(t,opt){
  document.getElementById("tituloSelect2").innerHTML=t;
  var select = document.getElementsByTagName("select")[1];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}

function ponerDatosCheckboxHtml2(t,opt){
 var checkboxContainer=document.getElementById('checkboxDiv2');
 document.getElementById('tituloCheckbox2').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;   
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
 }  
}




function ponerDatosCheckboxHtml(t,opt){
 var checkboxContainer=document.getElementById('checkboxDiv');
 document.getElementById('tituloCheckbox').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
 }  
}

//****************************************************************************************************
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
