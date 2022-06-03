// alert("Nouha");

// --1. Addition
// --INFO -- je peux déclarer plusieurs variable à la suite

// je déclare mes variablaes

var nb1, nb2, resulta;

// j'affiche des valeur
nb1 = 10;
nb2 = 5;

// j'utilise mes variable avec un calcul
resultat = nb1 + nb2;
//  j'affiche mon resutat dans la console
console.log(resulta);

// ---2. Soustraction
// --Soustraction de nb1 - nb2 avec l'opération " - "
resulta = nb1 - nb2;
console.log(resulta);

// --3. Multiplication
//  -- Multiplication de nb1 * nb2 avec l'opération "*"
resulta = nb1 * nb2;
console.log(resulta);

// 4. Division
// -- Division avec l'opérateur "/"
resulta = nb1 / nb2;
console.log(resulta);

// 5. modulo
// --le modulo retourne le reste d'une
// --modulo de nb1 % nb2 avec l'opérateur "%"
resulta = nb1 % nb2;
console.log(resulta);

// --et maintenant je ré-affecte une valeur à nb1
nb1 = 11; 
resulta = nb1 % nb2;
console.log("Le reste de la division de" + nb1 +"par" + nb2 + "esr égal à :" + resulta);

// --6. Ecritures simplifiées
nb1 = 15
nb1 = nb1 + 5;// égal è 20


nb1 += 10; // nb1 lui-même + quelque chose
console.log('résulta de "nb1 += 10;" est ' + nb1);// égal à 20, alternance de guillemet et doubles pour ne pas casser ma chaine de caractères


// le raccourci est le même avec les autres opérateur +, -, /, *, %

//  Si j'utilise un '(apostrophe) dans une phrase concaténée, je peux échapper le le caractère à l'aide d'un anti-slash \ (alt gr + 8)



