/* --- Afficher une pyramide ---

Afficher un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre.


Exemples d’utilisation :
$> ruby exo.rb O 5
    O
   OOO
  OOOOO
 OOOOOOO
OOOOOOOOO


Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

//Initialisation des variables
let args = process.argv.slice(2)
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let arg3 = process.argv[4]
let res = ""
const nbRegex = /^[+]?\d+([.]\d+)?$/

//f() utilisées
//Number test
function isNotNumber(args){
    let counter = 0
    for (let i = 0; i < args.length; i++) {
        if (args.match(nbRegex)) {
            counter ++
        } else {
            counter--
        }
    }
    return counter
}


//Main f()
function pyramide(brique, nbEtage){
    let space = " "
    let step = 1
    for (let i = nbEtage-1; i > -1; i--) {
        console.log(space.repeat(i) + brique.repeat(step));
        step+=2
    }
}

//Gestion d'erreurs
if (arg1 == undefined || arg2 == undefined || arg3 !== undefined) {
    console.log("Merci d'entrer 2 arguments valables");
    return
}

//Inverse de ma f() isNumber() de l'exo précedent 
if (isNotNumber(arg1) > 0) {
    console.log("Ce script doit contenir en premier argument un charactère.");
    return
}
if (isNotNumber(arg2) < 0) {
    console.log("Ce script doit contenir en second argument un chiffre positif.");
    return
}

//Traitement


//Affichage résultat
pyramide(arg1, arg2)