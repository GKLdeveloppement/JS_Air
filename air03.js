/* --- Chercher l’intrus ---

Créez un programme qui retourne la valeur d’une liste qui n’a pas de paire.

Exemples d’utilisation :
$> python exo.py 1 2 3 4 5 4 3 2 1
5

$> python exo.py bonjour monsieur bonjour
monsieur

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

//Initialisation des variables
let args = process.argv.slice(2)
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let arg3 = process.argv[4]
let res = ""
const nbRegex = /^-?[0-9]\d*(\.\d+)?$/
let finalArr = []

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

//check multiple occurence in arr
function multipleOccurArr(arr, wantedItem){
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == wantedItem) {
            count++
        }
    }
    return count
}

//Main f()
function pasDePair(arr){
    for (let i = 0; i < arr.length; i++) {
        //pour chaque itération on va compter cb de fois elle apparait dans la liste
        if (multipleOccurArr(arr, arr[i]) < 2) {
            //inférieur à 2 fois on ajoute à notre return
            finalArr.push(arr[i])
        }
    }
    return finalArr
}

//Gestion d'erreurs
if (arg1 == undefined || arg2 == undefined || arg3 == undefined) {
    console.log("Merci d'entrer 3 arguments minimum valables");
    return
}

//Traitement
let result = pasDePair(args)

//Affichage résultat
console.log(result);