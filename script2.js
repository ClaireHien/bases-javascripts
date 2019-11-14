console.log("----------------------------------------------------------");
{ prompt("lancement du script2 : appuie sur entrée pour continuer");
let n = prompt("De quel nombre veux-tu calculer la factorielle ?");
let fact = 1;

    for (let i=1 ; i<=n ; i++){
        fact=fact*i;
    }

console.log(`Le factoriel de ${n} est : ${fact}`);

}