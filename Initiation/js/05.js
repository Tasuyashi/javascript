// alert('test');

// --Structure de base IF

 if(true){//Par défaut la condition à vérifier le IF elle est vraie
    /* .....code......*/ 
 }


 var nb1 = 10;
 if(nb < 50){
     console.log("nb1 est bien inférieur à 50");

 }

 if(true){
     //code si vraie
 }
 else{
     //code si FAUX
 }

 if(nb1 > 50){
     console.log("nb1 est bien supérieur à 50");
 }else{
     console.log("nb1 n'est pas supérieur à 50");
 }

 // EXERCICE
 // On utilise le IF pour vérifier l'âge de l'internaute.
 // => s'il est majeur je lui souhte le bienvenue
 // => s'il est mineur je [1] lui signale et [2] le renvoie vers un autre site

 // 1 -- je déclare la majorité légale
 var MajoriteFR = 18;

 // 2. demander l'âge en s'assurant que nous avons un NUMBER
 var age = parseInt(prompt("Indiquez votre âge ?"));

 // 3. ke vérifie si mon internaute est majeur
 if(age >= MajoriteFR){//bienvenue si vrai
         alert("Bienvenu, vous êtes majeur")
 }else{
     // s'il est mineur je lui signle
     alert("Allaz voir un autre super site...");
     // et ensuite je redirige vers W3school
     document.location.href = "https://www.w3schools.com/js/js_if_else.asp"
 }