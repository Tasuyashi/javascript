// Syntaxe de base

// commentaire sur une ligne 

/*
  Ici, je fais un commentaire sur plusieur ligne
*/

// -- 1: Déclarer une variable en JS
var Prenom;

// -- 2: Affecter une valeur à une variable
// Prenom="Nouha";

// var Prenom ="Nouha";

// --3: Une instruction se termine TOUJOURS par un point-virgule, aussi il est possible d'écrire plusieurs instruction sur une seule ligne
// inst_1;
// int_2; inst_3;

// --4: Afficher une boîte de dialongue (2 façons)
// alert("Super, tu es arrivé sur mon site !")

// --5: Afficher dans la console (ici, la valeur de ma variable Prenom)
// console.log(Prenom)

// --6: Afficher dans la page web
// document.write("A lta pause vous aurez des haribos pik !")

// --7: Domander à l'utilisateur une valeur (2 façon)
// window.prompt("Question: on est quel jour ?", "jour de la semaine");
//promet("Question: on est quel jour?" ,"jour de la semaine")

// --et pour manipuler cette valeur, je n'oublie pas la stocker
//var jour = promet("Question: on est quel jour ?", "jour de la semaine");
// console.log(jour)

// --8: Attention /!\ le JS est sensible à la case ('case sensitive')
//mavariable=/=maVariable=/= ma_variable camel case snake case 

// --9 Une variable ne peut pas commencer par un chiffre, ne doit contenir que des caractères alphanumérique, et ne peut pas être un mot réversé (var, for... des élément natif du langage JS)

//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

// --10: Une vrariable peut être déclarée de explicit:
var fruit;
var fruit = "fraise";
// ou implicite;
var fruit_2 = "coco";
haribo = "Tagada";

/*-----------------------------------------
/~~~~~~~~~~~~Les TYPES DE VARIABLES~~~~~~~~~~~/
-----------------------------------------*/

//  --1. Chaîne de caractères (string)
var vacances = "2022";
var destination = "Maldive";

// --.2 Un nombre entier (integer ou int)
var annee = 2022;

// 3. Un nombre décimal (float)
var nombre_a_virgul = -5.32;

// --4. Un booléen (boolean ) VRAI/FAUX = TRUE/FALSE)
var unBooleen = false; // -- true

// -- 5. Les Constantes 

// la déclaration const permet de crée une constante accessible uniquement en lecture. Contrairement à une variable sa valeur ne peut plus être modifiée par réaffection plus bas dans le code.
// Une constante ne prut pas être déclarée à nouveau dans la même script.

// --par convention les constantes sont en majouscules

const PAYS = "France"; //sting
const AN = "2022" //sting
const BIRTH = 2022; //nombre

// --6. typeof permet de connaître le type de ma variable
console.log(vacances)
console.log(typeof vacances)
console.log(annee)
console.log(typeof annee)

//  En JS Les variable sont auto-typées
// On peut convertir une variable de type NUMBER en STRING en aussi STRING en NUMBER avec les fonction native de JS 
//  -- la fonction parseInt() renvoie un entier à partire d'une chaine de caractèrs

var unChiffre = "12";
confirm.log(unChiffre);
confirm.log(typeof unChiffre)

// STRING => NUMBER
unChiffre = parseInt(unChiffre);
console.log(unChiffre)
console.log(typeof unChiffre);

// je ré-affecte une valeur 
unChiffre = "12.22";
console.log(unChiffre)
console.log(typeof unChiffre);

//STRING =>FLOAT
unChiffre = parseFloat(unChiffre);
console.log(unChiffre); 
console.log(typeof unChiffre);

// NUMBER => STRING
var nb_en_lettre = 258;
console.log(nb_en_lettres);
console.log(typeof nb_en_lettre);

var nb_en_lettre = nb_en_lettre.toString();
console.log(nb_en_lettres);
console.log(typeof nb_en_lettre)

// FIN

