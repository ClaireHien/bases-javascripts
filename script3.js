console.log("----------------------------------------------------------");

{  prompt("lancement du script3 : appuie sur entrée pour continuer");
let n = prompt("Salut ! Bienvenue dans ma pyramide, combien d'étages veux-tu ?");

var message = "";
var espace = "";
var nbEspace ="";
for (var a=1; a<=n; a++){
    
    let nb = message.length;
    let nbEspace = n - nb;
    //console.log("nombre d'espace à mettre : " + nbEspace);

        let b = 1;
        while(b <= nbEspace) {
            espace += " ";
            b +=1;
        } 
    message += "#";
    console.log(`${espace}${message}`);
    espace = ""
   // console.log(message)
}

}