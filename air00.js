/* --- SPLIT ---

Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).

Votre programme devra utiliser une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}


Exemples d’utilisation :
$> python exo.py “Bonjour les gars”
Bonjour
les
gars

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

//Initialisation des variables
let args = process.argv.slice(2)
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let res = 0
let arrTemp = []
let arrFinal =[]
const nbRegex = /^-?[0-9]\d*(\.\d+)?$/
let separ = " "

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
function separator(aDecouper, separateur){
    for (let i = 0; i < arg1.length; i++) {
        //On remplis le tableau jusqu'à arrivé au séparateur
        arrTemp.push(aDecouper[i])

        if (aDecouper[i] == separateur){
            arrFinal.push(arrTemp.join(""))
            arrTemp = []

        } else {
            //Sinon on va vérifier qu'on est arrivé au dernier séparateur pour ajouter le dernier mot
            let lastIndex = aDecouper.lastIndexOf(separateur)
            
            if (i > lastIndex) {
                //+1 pour skipper l'espace
                let lastWord= aDecouper.slice(lastIndex+1)
                arrFinal.push(lastWord)
                break
            }
        }
    }
    //return avec affichage ligne par ligne
    return arrFinal.join("\n")
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
let result = separator(arg1, separ)

//Affichage résultat
console.log(result);