// alert("こんにちは");

// // l'opérateur de comparaison == signifie 'egal à'
// // il permrt de vérifier qui les VALEURS d 2 sont indentiques

// var nb1 = 123;
// var nb2 = "123";
// console.log(nb1 == nb2);// retourne TRUE

// // l'opérateur de comparaison === signifie "strictement égal à"
// // il permet de vérifier le VALEUR et le type
// console.log(nb1 === nb2);// retourne FALSE

// // -- l'opérateur != signifie "différent de ... en VALEUR"
// console.log(nb1 != nb2); // retourne FALSE 

// // -- L'opérateur !== signifie "strictement différent de ... en VALEUR et en TYPE"
// console.log(nb1 !== nb2); // retour TRUE

// //-----------------------------------------------------

// //EXERCICE
// /* j'arrive sur un espace sécurisé au moyen du prénom et de l'âge.
// je doit saisir mon prénom âge pour être authentifié sur le  site (les infos sont en BDD, ici dans mes variables prenom et age.)
// En cas d'échec une alerte m'informe du probléme. 


// -----------------------------------------------------*/

// var prénom, monAge;
// prénom = "Hafsa";
// monAge = 20;

// // 1-- Demander son prénom à l'utilisateur avec un promt

// var prenomLogin =prompt("あなたの名前は何ですか");
// // 2 -- Je vérifie si le prénom saisi (prenomLogin) correspond à celui de donnée (prénom)
// if(prenomLogin === prénom){
//     //alert('test');
//     // 2a. Si tout est ok, je continue la vérification avec l'âge
//     // 2a1. Demende a mon utilisateur son âge

//     var ageLogin = parseInt(promt("あなたの年齢 ?"));
//     if(ageLogin === monAge){
//        alert("いらっしゃいませ " + prenomLogin);

//     }else{
//          // 2a2. si les ages ne correspondent pas, je lance une ALERT.
//          alert("Erreur d'âge");

//        }
       
// }else{
//     // 
//     alert("Attention, prenom nom reconunu")
// }

var prenom, monAge, mdp;
prenom ="Tom";
monAge = 28;
mdp = "bibi";

var prenomLogin = prompt("あなたの名前は何ですか");

if (prenomLogin === prenom){
       var ageLogin = parseInt(prompt("あなたの年齢 ?"));

       if(ageLogin === monAge){
        var mdpLogin = prompt("パスワード ?");

        if(mdpLogin === mdp){
        alert("いらっしゃいませ " + prenomLogin);
        }else{
            alert(" 年齢の問題 ");
           
        }
    }else{
        alert("年齢エラー");
    }
}else{
    alert("注意、名が認識されない")
}
