var xmlhttp, xmlDoc;
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "note.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
document.getElementById("title").innerHTML=
xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
document.getElementById("from").innerHTML=
xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;
document.getElementById("message").innerHTML=
xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;
