/* --- CONCAT ---
Créez un programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères. Espacés d’un séparateur donné en dernier argument au programme.

Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, separateur) {
	# votre algorithme
	return (string)
}


Exemples d’utilisation :
$> python exo.py “je” “teste” “des” “trucs” “ “
Je teste des trucs


Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

//Initialisation des variables
let lastItemArr = process.argv.length-1;
let args = process.argv.slice(2, lastItemArr)
let separateur = process.argv[lastItemArr]
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let res = ""
const nbRegex = /^-?[0-9]\d*(\.\d+)?$/

let finalStr = ""

//f() utilisées
//Number test
function isNotNumber(args){
    let counter = 0
    for (let i = 0; i < args.length; i++) {
        if (args[i].match(nbRegex)) {
            counter ++
        } else {
            res = true
        }        
    }
    return counter
}


//Main f()
function concat(arr, sep){
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length-1) {
            finalStr += arr[i]
            return finalStr
        }
        finalStr += arr[i] + separateur
    }
    return finalStr

}

//Gestion d'erreurs
if (arg1 == undefined || arg2 == undefined) {
    console.log("Merci d'entrer 2 arguments minimum valables");
    return
}

//Inverse de ma f() isNumber() de l'exo précedent 
if (isNotNumber(args) > 0) {
    console.log("Ce script ne peut prendre que des lettres/mots en arguments");
    return
}

//Traitement
let result = concat(args, separateur)

//Affichage résultat
console.log(result);