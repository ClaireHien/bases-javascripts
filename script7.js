console.log("----------------------------------------------------------");
{ prompt("lancement du script6 : appuie sur entrée pour continuer");

console.log("Pour arrêter le bot ? Ecrit STOOP")

let answer = "";
let upper = "";
let question ="";
let fortnite = "";

while(answer !== "STOOP") {
  answer = prompt();
  console.log(answer)
  upper = answer.toUpperCase()
  question = answer.indexOf("?");
  fortnite = answer.indexOf("fortnite");
    if (question != -1) {
        console.log("Ouais ouais...") //???
    } else if (answer === "") {
        console.log("T'es en PLS ?") //sans texte
    } else if (answer === upper) {
        console.log("Pwa! Calme-toi...") //capitales
    } else if (fortnite != -1) {
        console.log("On se fait une partie de soum-soum ?") //fortnite
    } else {
        console.log("Balek.")
    };
} 
console.log("Ok ok! c'est bon, je me tais...")

}