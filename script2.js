var n = prompt("De quel nombre veux-tu calculer la factorielle ?");
var fact = 1;

    for (var i=1 ; i<=n ; i++){
        fact=fact*i;
    }

console.log(`Le factoriel de ${n} est : ${fact}`);