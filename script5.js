console.log("----------------------------------------------------------");
{ prompt("lancement du script5 : appuie sur entrée pour continuer");

const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  console.log("liste des livres :");
  console.log(books);

  console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?");
  for (let index in books) {
    book = (books[index]);
    let rent = book.rented;
    if(rent > 0) {
        console.log(true)
      }
    else {
        console.log(false)
    }; 
};

  console.log("Le livre le plus emprunté :");
  let most = "1";
  let title
  for (let index in books) {
    book = (books[index]);
    let rent = book.rented;
    if (rent > most) {
    most = rent
    title = book.title
    };
};
console.log(`> ${title} avec ${most} emprunts`);

console.log("Le livre le moins emprunté :");

  let less = "1000";
  let title2
  for (let index in books) {
    book = (books[index]);
    let rent = book.rented;
    if (rent < less) {
    less = rent
    title2 = book.title
    };
};

console.log(`> ${title2} avec ${less} emprunts`);


  console.log("Livre avec l'ID 873495 :");
    for (let index in books) {
        book = (books[index]);
        let id = book.id;
        if(id === 873495) {
            console.log(`> ${book.title}`)
          };
    };

  console.log("Liste des livres après la suppression du 133712 :");
    for (let index in books) {
        book = (books[index]);
        let id = book.id;
        if(id === 133712) {
            let ind = index + 1
            books.splice(index, ind);
          };
    };
  console.log(books)

}
