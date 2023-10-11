console.log("scipt chargé")

// creer un element de table//
// On créé un élément HTML "main"
let divCalculatrice = document.createElement("main");
document.body.appendChild("main")

// On lui attribut des caractéristiques (id, class, text, couleur, etc)
divCalculatrice.setAttribute("id", "calculatrice");
// divCalculatrice.classList.add("")

// On injecte l'élément en tant qu'enfant de "body"
document.body.appendChild(divCalculatrice);

// On créé un élément HTML "div"
let calcEcran = document.createElement("div");

// On lui attribut des caractéristiques (id, class, text, couleur, etc)
calcEcran.innerText = "Écran de ma calculette";

// On injecte l'élément en tant qu'enfant de "divCalculatrice"
divCalculatrice.appendChild(calcEcran);

// document.querySelector("#calculatrice").appendChild(calcEcran);

