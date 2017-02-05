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
    function ponerDatosInputHtml(t){
 document.getElementById("title2").innerHTML = t;
}
    
   //***************************************************************************************************NUMBER2
 //Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
 var title7=xmlDoc.getElementsByTagName("title")[6].childNodes[0].nodeValue;
 ponerDatosInputHtml2(title7);
// RESPUESTA FALTA!!numeroSecreto=parseInt(xmlDoc.getElementsByTagName("answer")[0].childNodes[0].nodeValue);
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
    
  function ponerDatosSelect2Html(t,opt){
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

    /* PENDIENTE DE REVISAR
    
    //**************************************************************************************************MSELECT 1
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var title5=xmlDoc.getElementsByTagName("title")[4].childNodes[0].nodeValue;
 var opcionesMSelect = [];
 var nmopt = xmlDoc.getElementById("pregunta_005").getElementsByTagName('option').length;
  for (i = 0; i < nmopt; i++) { 
    opcionesMSelect[i] = xmlDoc.getElementById("pregunta_005").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }
 ponerDatosMSelectHtml(title5,opcionesMSelect);
//RESPUESTA FALTA respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].childNodes[0].nodeValue);
    
  function ponerDatosMSelectHtml(mt,mopt){
  document.getElementById("title5").innerHTML=mt;
     //RECUERDA document se refiere al documento HTML, xmlDOC es el documento leido XML.   
  var mSelect = document.getElementsByTagName("select")[1];
  
     //Bucle para rellenar todas las opciones de select
  for (i = 0; i < mopt.length; i++) { 
    var moption = document.createElement("option");
    moption.text = mopt[i];
    moption.value=i+1;
    mSelect.options.add(moption);
 }  
}
  */     
    
  //***********************************************************************************************************CHECKBOX
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var title3 = xmlDoc.getElementsByTagName("title")[2].childNodes[0].nodeValue;
 var opcionesCheckbox = [];
 var nopt3 = xmlDoc.getElementById("pregunta_003").getElementsByTagName('option').length;
 for (i = 0; i < nopt3; i++) { 
    opcionesCheckbox[i]=xmlDoc.getElementById("pregunta_003").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }  
 ponerDatosCheckboxHtml(title3,opcionesCheckbox);
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
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;;    
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
    label.setAttribute("for", "color_"+i);
    input.type="radio";
    input.name="color";
    input.id="color_"+i;;    
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
    label.setAttribute("for", "color_"+i);
    input.type="radio";
    input.name="color";
    input.id="color_"+i;;    
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
 }  
}    
    
    
}
