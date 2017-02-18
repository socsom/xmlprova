//Definimos las variables donde se guardaran las respuestas y la nota y el conjunto del formulario
var formElement=null;
/*
var respuesta1=null;
var respuesta2=null;
var respuesta3=[];
*/
var respuesta4=null;
/*
var respuesta5=[];
var respuesta6=null;
var respuesta7=null;
var respuesta8=[];
var respuesta9=null;
var respuesta10=[];
*/
var nota=0; //nota de la prueba sobre 10

//**************************************************************************************************** 

//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function(){ 

 //CORREGIR al apretar el botón
 formElement=document.getElementById('myForm');
 formElement.onsubmit=function(){
   inicializar(); //al final del DOC
   /*
     corregir1();
   corregir2();
   corregir3();
   */
  corregir4();
  /*
     corregir5();
   corregir6(); 
   corregir7();
   corregir8();
   corregir9();
   corregir10();
   
   
  // presentarNota();   // al final del DOC
  
  // return false;
//}

*/

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
   
  

      //*****************************************************************************PREGUNTA 1*******************RADIO2
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var title1 = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
 var opcionesRadio2 = [];
 var nopt1 = xmlDoc.getElementById("pregunta_001").getElementsByTagName('option').length;
 for (i = 0; i < nopt1; i++) { 
    opcionesRadio2[i]=xmlDoc.getElementById("pregunta_001").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }  
 ponerDatosRadio2Html(title1,opcionesRadio2);
 // FALTA GUARDAR LAS RESPUESTAS
 
 // Ahora ponemos esos datos recuperados de titulos y opciones en el HTML con la siguiente funcion:
function ponerDatosRadio2Html(t,opt){
 var radioContainer=document.getElementById('title1');
 var h3 = document.createElement("h3");
 h3.innerHTML = t;
 radioContainer.appendChild(h3); 
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="radio";
    input.name="color";
    input.id="color_"+i;;    
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
 }  
}       
    
    
    //***************************************************************************PREGUNTA 2****************************NUMBER1
 //Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
 var title2=xmlDoc.getElementsByTagName("title")[1].childNodes[0].nodeValue;
 ponerDatosInputHtml(title2);
 // FALTA GUARDAR LAS RESPUESTAS
 
 // Ahora ponemos esos datos recuperados de titulos y opciones en el HTML con la siguiente funcion:
    
    function ponerDatosInputHtml(t){
 document.getElementById("title2").innerHTML = t;
}
 
      
  //*************************************************************************PREGUNTA 3***************************CHECKBOX
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var title3 = xmlDoc.getElementsByTagName("title")[2].childNodes[0].nodeValue;
 var opcionesCheckbox = [];
 var nopt3 = xmlDoc.getElementById("pregunta_003").getElementsByTagName('option').length;
 for (i = 0; i < nopt3; i++) { 
    opcionesCheckbox[i]=xmlDoc.getElementById("pregunta_003").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }  
 ponerDatosCheckboxHtml(title3,opcionesCheckbox);
  // FALTA GUARDAR LAS RESPUESTAS
 
 // Ahora ponemos esos datos recuperados de titulos y opciones en el HTML con la siguiente funcion:
 
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
     
  

    //******************************************************************************PREGUNTA 4********************SELECT 1
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var title4=xmlDoc.getElementsByTagName("title")[3].childNodes[0].nodeValue;
 var opcionesSelect = [];
 var nopt4 = xmlDoc.getElementById("pregunta_004").getElementsByTagName('option').length;
  for (i = 0; i < nopt4; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("pregunta_004").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }
 ponerDatosSelectHtml(title4,opcionesSelect);
 respuesta4=parseInt(xmlDoc.getElementsByTagName("answer")[4].innerHTML);//COMPRUEBA LO DE GETELEMENTBYID
    
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
 
 //AHORA CORRIGE LA RESPUESTAS
 function corregir4(){
  //Compara el índice seleccionado con el valor del íncide que hay en el xml (<answer>2</answer>)
  //para implementarlo con type radio, usar value para enumerar las opciones <input type='radio' value='1'>...
  //luego comparar ese value con el value guardado en answer
  var sel = formElement.elements[0];  // CREO QUE ESTO ES EL ORDEN EN QUE SE PRESENTAN LOS RESULTADOS EN EL DIV
  if (sel.selectedIndex==respuesta4) {
   darRespuestaHtml("P4: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P4: Incorrecto");
}   
    */
   
    //**********************************************************************************PREGUNTA 5***************MSELECT 1
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var title5=xmlDoc.getElementsByTagName("title")[4].childNodes[0].nodeValue;
 var opcionesMSelect = [];
 var nopt5 = xmlDoc.getElementById("pregunta_005").getElementsByTagName('option').length;
  for (i = 0; i < nopt5; i++) { 
    opcionesMSelect[i] = xmlDoc.getElementById("pregunta_005").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }
 ponerDatosMSelectHtml(title5,opcionesMSelect);
 // FALTA GUARDAR LAS RESPUESTAS
 
 // Ahora ponemos esos datos recuperados de titulos y opciones en el HTML con la siguiente funcion:
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
 
  
   //*******************************************************************************************PREGUNTA 6****************RADIO
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var title6 = xmlDoc.getElementsByTagName("title")[5].childNodes[0].nodeValue;
 var opcionesRadio = [];
 var nopt6 = xmlDoc.getElementById("pregunta_006").getElementsByTagName('option').length;
 for (i = 0; i < nopt6; i++) { 
    opcionesRadio[i]=xmlDoc.getElementById("pregunta_006").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }  
 ponerDatosRadioHtml(title6,opcionesRadio);
  // FALTA GUARDAR LAS RESPUESTAS
 
 // Ahora ponemos esos datos recuperados de titulos y opciones en el HTML con la siguiente funcion:
 
function ponerDatosRadioHtml(t,opt){
 var radioContainer=document.getElementById('title6');
 var h3 = document.createElement("h3");
 h3.innerHTML = t;
 radioContainer.appendChild(h3); 
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="radio";
    input.name="color";
    input.id="color_"+i;    
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
 }  
}    

    
   //******************************************************************************************PREGUNTA 7 *********NUMBER2
 //Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
 var title7=xmlDoc.getElementsByTagName("title")[6].childNodes[0].nodeValue;
 ponerDatosInputHtml2(title7);
 // FALTA GUARDAR LAS RESPUESTAS
 
 // Ahora ponemos esos datos recuperados de titulos y opciones en el HTML con la siguiente funcion:
    function ponerDatosInputHtml2(t){
 document.getElementById("title7").innerHTML = t;
}
 
   
    
 //****************************************************************************************PREGUNTA 8*******************CHECKBOX2
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var title8 = xmlDoc.getElementsByTagName("title")[7].childNodes[0].nodeValue;
 var opcionesCheckbox2 = [];
 var nopt8 = xmlDoc.getElementById("pregunta_008").getElementsByTagName('option').length;
 for (i = 0; i < nopt8; i++) { 
    opcionesCheckbox2[i]=xmlDoc.getElementById("pregunta_008").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }  
 ponerDatosCheckbox2Html(title8,opcionesCheckbox2);
  // FALTA GUARDAR LAS RESPUESTAS
 
 // Ahora ponemos esos datos recuperados de titulos y opciones en el HTML con la siguiente funcion:
 
function ponerDatosCheckbox2Html(t,opt){
 var checkboxContainer=document.getElementById('title8');
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
    input.id="color_"+i;   
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
 }  
}  
       
    
    //******************************************************************************PREGUNTA 9**************************SELECT 2
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var title9=xmlDoc.getElementsByTagName("title")[8].childNodes[0].nodeValue;
 var opcionesSelect2 = [];
 var nopt9 = xmlDoc.getElementById("pregunta_009").getElementsByTagName('option').length;
  for (i = 0; i < nopt9; i++) { 
    opcionesSelect2[i] = xmlDoc.getElementById("pregunta_009").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }
 ponerDatosSelect2Html(title9,opcionesSelect2);
 // FALTA GUARDAR LAS RESPUESTAS
 
 // Ahora ponemos esos datos recuperados de titulos y opciones en el HTML con la siguiente funcion:
    
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

 
    
     //*************************************************************************************PREGUNTA 10*******MSELECT 2
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var title10=xmlDoc.getElementsByTagName("title")[9].childNodes[0].nodeValue;
 var opcionesMSelect2 = [];
 var nopt10 = xmlDoc.getElementById("pregunta_010").getElementsByTagName('option').length;
  for (i = 0; i < nopt10; i++) { 
    opcionesMSelect2[i] = xmlDoc.getElementById("pregunta_010").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }
 ponerDatosMSelectHtml2(title10,opcionesMSelect2);
 // FALTA GUARDAR LAS RESPUESTAS
 
 // Ahora ponemos esos datos recuperados de titulos y opciones en el HTML con la siguiente funcion:
    
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

}   
       
   // termina la función gestionarXML
   
//****************************************************************************************************
//Gestionar la presentación de las respuestas. La funcion darRespuestaHTML recoge uno a uno el resultado de las correcciones
// y lo pone en el resultadosDiv del HTML
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
    

