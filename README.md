# xmlprova
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




#DUBTES

* Ha d'incloure diferents CCS segons sigui responsive o amb % ja val??
* S'ha d'assignar cada tag xml  a un element html o es pot agafar un html i assignarle tot una question p.e.?
* Com lligues els nodes? Què poses als atributs??
* 


#WHAT'S NEXT?

* Acabar d'assignar correctament el xml al html i escriure les funcions de recollida d'inputs del usuaris en jscript:
http://fpadistancia.caib.es/mod/page/view.php?id=63792

