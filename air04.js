/* --- Un seul à la fois ---

Créez un programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.


Exemples d’utilisation :
$> python exo.py “Hello milady,   bien ou quoi ??”
Helo milady, bien ou quoi ?


Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

//Initialisation des variables
let args = process.argv.slice(2)
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let res = ""
let strFinal = ""
const nbRegex = /^-?[0-9]\d*(\.\d+)?$/

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
function deleteDoubleLetter(str){
    for (let i = 0; i < str.length; i++) {
        //vérif dernier char
        if (str.indexOf(str[i]) == str.length-1) {
            strFinal +=str[i]
            return strFinal
        }
        //si c'est égal à ce qui suit
        if (str[i] == str[i+1]) {

        } else {
            strFinal += str[i]
        }
    }
    return strFinal
}

//Gestion d'erreurs
if (arg1 == undefined || arg2 !== undefined) {
    console.log("Merci d'entrer 1 arguments valables");
    return
}

//Inverse de ma f() isNumber() de l'exo précedent 
if (isNotNumber(args) > 0) {
    console.log("Ce script ne peut prendre que des lettres/mots en arguments");
    return
}

//Traitement
let result = deleteDoubleLetter(arg1)

//Affichage résultat
console.log(result);