console.log("script chargée !")

// let pour creer une variable//document c'est est ma page/creatElement est le code pour creer un element//

// let "nomer le document creer avec cette variable = une boite que je souhaite mettre des chose dedant qui seront utile en fonction de se que je veut faire"
// document.createElement("tagname seul les code html qui son dans la tag list html")




// j'ai creer ma calculatrice qui s'apelle calc
let calc = document.createElement("main");      
calc.style.height = "600px";
calc.style.width = "400px";
calc.style.border = "3px solid black";
calc.style.backgroundColor = "white"

// atribuer un enfant a mon element "document.body.appenchild"(le nom de ma boite creer ma variable)


// calculatrice est l'enfant de body
document.body.appendChild(calc);


// j'ai creer un ecran// que j'ai mis dans une div
let ecran = document.createElement("div");
// j'ai atribuer une classe a mon ecran avec ecran.classlist.add("classe-exemple")
ecran.classList.add("classe-ecran");

// exemple.innerText = la valeur a mettre dans le texte//
ecran.innerText= 0;
ecran.style.backgroundColor= "gray";

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
        boutton.style.border = "1px solid blue";
        boutton.style.height = "100px";
        boutton.style.width = "100px";
        
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
    decimal.style.border = "1px solid blue";
    decimal.style.height = "80px";
    decimal.style.width = "120px";
    decimal.classList.add("classe-boutton");
    decimal.innerText = ".";
    clavierChiffres.appendChild	(decimal);


// j'ai creer un element clavier signes sur le quel j'affect a clavier 
let clavierSignes = document.createElement("div");
    clavierSignes.classList.add("clavier-signes");
    clavier.appendChild(clavierSignes);
        // boutton supression C
let signeC = document.createElement("button");
    signeC.classList.add("classe-boutton");
    signeC.innerText= "C";
    signeC.style.height="60px";
    signeC.style.width="60px";
    signeC.style.border= "1px solid black";
    clavierSignes.appendChild(signeC);
    
    // je creer des bouttons que j'ajoute au claviersignes
    // bouton moins -
let signeMoins= document.createElement('button');
    // j'atribut une classe
    signeMoins.classList.add("classe-boutton");
    // j'atribut le signe a mon boutton
    signeMoins.innerText= "-";
    signeMoins.style.height= "60px";
    signeMoins.style.width= "60px";
    signeMoins.style.border= "1px solid black";
    

        // le moins devien l'enfant de clavierSignes
    clavierSignes.appendChild(signeMoins);

    // boutton plus +
let signePlus= document.createElement("button");
    signePlus.classList.add("classe-boutton");
    signePlus.innerText="+";
    signePlus.style.height="60px";
    signePlus.style.width="60px";
    signePlus.style.border = "1px solid black";
    clavierSignes.appendChild(signePlus);

    // boutton division /
let signeDivision= document.createElement("button");
    signeDivision.innerText= "÷";
    signeDivision.classList.add("classe-boutton");
    signeDivision.style.height = "60px";
    signeDivision.style.width = "60px";
    signeDivision.style.border= "1px solid black";
    clavierSignes.appendChild(signeDivision);

    // bouton multiplication
let signeMulti= document.createElement("button");
    signeMulti.innerText= "x";
    signeMulti.classList.add("classe-boutton");
    signeMulti.style.height= "60px";
    signeMulti.style.width= "60px";
    signeMulti.style.border="1px solid black";
    clavierSignes.appendChild(signeMulti);
    // boutton egal =
let signeEgal = document.createElement("button");
    signeEgal.classList.add("classe-boutton");
    signeEgal.innerText ="=";
    signeEgal.style.height= "60px";
    signeEgal.style.width= "60px";
    signeEgal.style.border= "1px solid black";
    clavierSignes.appendChild(signeEgal);
// fonction de claculatrice
        // je selectionne un element avec querrySelector/et je selectionne ma classe boutton
let premierBouton = document.querySelectorAll(".classe-boutton");
// j'affiche sur ma console.
console.log(premierBouton);
        //je selectionne mon premier boutton 
        // for each = c'est pour chaque element (unBoutton => {})
        // {exemple.addEventListener("click", function() {
premierBouton.forEach(unBouton => {

        // addEventListener= c'est pour ajouter un ecouter d'evenement (surveiller le click , function() )
    unBouton.addEventListener("click", function(){

        
        if (unBouton.innerText !== "C" && unBouton.innerText !== "=") {//Si la propriété innerText du bouton sur lequel j'ai cliqué est différent de "C" et différent de "="
            console.log("L'utilisateur a appuyé sur la touche : ", unBouton.innerText);// Je fais ça
            document.querySelector(".classe-ecran").innerText += unBouton.innerText;// et ça
        } else { //Sinon
            // Si appuyé sur C ou =
            console.log("Tu as cliqué sur C ou ="); //je fais ça
        }
        
        // unBouton.style.color = "green";
        // unBouton.style.fontSize = "50px";
        // unBouton.style.backgroundColor = "red";
    })
    
})





