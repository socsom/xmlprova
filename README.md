# xmlpARSE
Fer una aplicació d'examen autocorrectiu amb HTML, CSS, JAVASCRIPT I XML
##HTML
Es crea l'esquelet d'una web utilitzant percentatges per tal que sigui 'responsive' 

##CSS
Se li dona un estil formal a la web. S'utilitza una imatge d'una universitat pagesa = 'fake!'

##JAVASCRIPT
Amb el Javascript perseguim vàries coses: 

* Parsejar el XML per introduir-lo com a objecte dins HTML.
* Recollir i enviar les respostes de l'usuari.
* Respondre en forma d'avaluació a les mateixes.

## XML
S'edita un arxiu XML amb les preguntes, opcions i respostes que en conjunt formen l'exament i es valida amb un arxiu DTD.


#QUÈ HE FET I EN QUIN ORDRE

* He fet un html amb 4 divs: tres que, amb float, fan la capçalera i el 4t que fa de cos del que després recollirà el HTML.
* Li he donat l'estil amb CSS utilitzant percentatges per tal que sigui responsive.
* Fins aquí lo "fàcil" :o)
* Després li he afegit la part de codi de jscript que crida al servidor per llegir el xml.
* Dins tb del jscript he definit la forma en que llegeix un element HTML i l'assigna a un tag XML (parsejar).
* He aconseguit llegir el xml i ficar-lo a l'esquelet HTML: preguntes i respostes. 
* Després he buscat la manera de que es llegissin les respostes corresctes i es comparassin amb les que introdueix l'usuari.
* Per últim he establert la forma de comparar les dades i tornar una data en un div que es superposa i que té un botó amb el qual es recarrega la pàgina i es torna a començar. 
* Els tipus d'elements que he aconseguit que siguin completament funcionals són els text, els select i els checkbox. Als radios crec saber com es corregia pero no he pogut fer un bucle per donar-li value i tots valien 1. No entenc els bucles.



#DUBTES I DIFICULTATS

* Ha estat un infern això de dependre del servidor de github i lo de refrescar el rawgit. Mil vegades se m'ha descol·locat tot sense motiu aparent o ha funcionat en un navegador pero no amb altre, dificultant moltíssim l'assaig-errada tan necessària quan no entenc el perquè de les coses. 

* Pels mateixos motius, m'ha quedat pendent implementar la correcció dels mselect i dels radio. He aconseguit llegirlos des de el xml pero no corregir-los. Els bucles de jscript no els entenc bé. 

* En quant a l'estil: he fet el que he pogut. Em falten nocions. Pero funciona a tots els tamanys, això sí. 

