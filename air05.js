/* --- Sur chacun d’entre eux ---

Créez un programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.


Exemples d’utilisation :
$> ruby exo.rb 1 2 3 4 5 “+2”
3 4 5 6 7

$> ruby exo.rb 10 11 12 20 “-5”
5 6 7 15


L’opération à appliquer sera toujours le dernier élément.


Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

//Initialisation des variables
let args = process.argv.slice(2)
let numbers = args.slice(0, args.length-1)
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let operateur = args[args.length-1]
let res = ""
//ajout du signe + (dans les anciens exos que le signe -)
const nbRegex = /^[-+]?[0-9]\d*(\.\d+)?$/

//f() utilisées
//Number test
function isNotNumber(args){
    let counter = 0
    for (let i = 0; i < args.length; i++) {
        if (args[i].match(nbRegex)) {
            res = true
        } else {
            counter ++
        }        
    }
    return counter
}


//Main f()
function operationSurListe(liste, operateur){
    //we gonna to try the map function
    let operateResult = liste.map(x => parseInt(x) + parseInt(operateur) )
    return operateResult.join(" ")
}

//Gestion d'erreurs
if (arg1 == undefined || arg2 == undefined) {
    console.log("Merci d'entrer 2 arguments minimum valables");
    return
}


if (isNotNumber(args) > 0) {
    console.log("Ce script ne peut prendre que des chiffres en arguments");
    return
}

//Traitement
let result = operationSurListe(numbers, operateur)

//Affichage résultat
console.log(result);