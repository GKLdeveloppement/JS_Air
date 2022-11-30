/* --- Afficher le contenu ---

Créez un programme qui affiche le contenu d’un fichier donné en argument.


Exemples d’utilisation :
$> cat a.txt
Je danse le mia
$> ruby exo.rb “a.txt”
Je danse le mia


Afficher error et quitter le programme en cas de problèmes d’arguments ou de fichier inaccessible.

*/

//Initialisation des variables
let args = process.argv.slice(2)
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let res = ""
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
function fileContent(file){
    const fs = require('fs');

    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        return
      }
      console.log(data)
    })
}

//Gestion d'erreurs
if (arg1 == undefined || arg2 !== undefined) {
    console.log("Merci d'entrer 1 arguments minimum valables");
    return
}

//Inverse de ma f() isNumber() de l'exo précedent 
if (isNotNumber(args) > 0) {
    console.log("Ce script ne peut prendre que des lettres/mots en arguments");
    return
}

//Traitement


//Affichage résultat
fileContent(arg1)