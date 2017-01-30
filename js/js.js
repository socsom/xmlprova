var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "questions.xml", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    document.getElementById("title").innerHTML =
    xmlDoc.getElementById("pregunta_001").childNodes[0];
    document.getElementById("title2").innerHTML =
    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    document.getElementById("title3").innerHTML =
    xmlDoc.getElementsByTagName("title")[2].childNodes[0].nodeValue;
    document.getElementById("title4").innerHTML =
    xmlDoc.getElementsByTagName("title")[3].childNodes[0].nodeValue;
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
   
}
