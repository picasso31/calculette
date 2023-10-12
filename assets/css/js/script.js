console.log("script chargée !")

// let pour creer une variable//document c'est est ma page/creatElement est le code pour creer un element//

// let "nomer le document creer avec cette variable = une boite que je souhaite mettre des chose dedant qui seront utile en fonction de se que je veut faire"
// document.createElement("tagname seul les code html qui son dans la tag list html")




// j'ai creer ma calculatrice qui s'apelle calc
let calc = document.createElement("main");      
calc.style.height = "600px";
calc.style.width = "400px";
calc.style.border = "1px solid black";
calc.style.backgroundColor = "white"

// atribuer un enfant a mon element "document.body.appenchild"(le nom de ma boite creer ma variable)


// calculatrice est l'enfant de body
document.body.appendChild(calc);


// j'ai creer un ecran// que j'ai mis dans une div
let ecran = document.createElement("div");
// j'ai atribuer une classe a mon ecran avec ecran.classlist.add("casse-exemple")
ecran.classList.add("classe-ecran");

// exemple.innerText = la valeur a mettre dans le texte//
ecran.innerText= 0;
ecran.style.backgroundColor= "gray"

// ensuite j'ai attribuer mon ecran a ma calculette //
calc.appendChild(ecran);


// j'ai creer un autre element clavier que j'ai nommer div 
let clavier = document.createElement("div");
// comme j'ai plusieur div je lui atribuer une classlist.add pour la reconnaitre plus facilement sur ma console
clavier.classList.add("classe-clavier");
clavier.style.border = "2px solid black";
// ensuite j'ai attribuer mon clavier a ma calculette
calc.appendChild(clavier);



// j'ai creer un element clavier chiffres sur le quel j'affect a clavier
let clavierChiffres= document.createElement("div");
clavierChiffres.classList.add("classe-clavier-chiffres");
clavier.appendChild(clavierChiffres);
// ensuite j'ai atribuer a mon clavier les boutton autan qu'enfant
// j'ai creer une boucle avec l'element for ( let index = debut de la boucle ; index <= "inferieur ou egal a au nombre indiquer ; index++")
// au lieu de creer 10 bouton et de touse les ecrire
for (let index = 1; index <= 10; index++) {

    // ensuite j'ai creer un boutton
    let boutton = document.createElement("button");
        boutton.style.border = "1px solid blue"
        boutton.style.height = "100px"
        boutton.style.width = "100px"
        
    // jr lui est attribuer une classlist
    boutton.classList.add("classe-boutton");

    //J'ai integer un text a l'interieur de mes boutton exemple.innerText= 0 "ou dans mon cas j'ai mis index qui etai egal de 1 a 10"
    if (index == 10) {
        boutton.innerText= 0;
    } else {
        boutton.innerText= index;
    }
    clavierChiffres.appendChild(boutton);
}
let decimal = document.createElement("button");
decimal.style.border = "1px solid blue"
decimal.style.height = "100px"
decimal.style.width = "100px"
decimal.classList.add("classe-boutton");
decimal.innerText = ".";
clavierChiffres.appendChild	(decimal);

// j'ai creer un element clavier signes sur le quel j'affect a clavier 
let clavierSignes = document.createElement("div");
clavierSignes.classList.add("classe-clavier-signes");

clavier.appendChild(clavierSignes);
