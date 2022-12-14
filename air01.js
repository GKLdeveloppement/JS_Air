/* --- SPLIT EN FONCTION ---

Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.

Votre programme devra intégrer une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}


Exemples d’utilisation :
$> python exo.py “Crevette magique dans la mer des étoiles” “la”
Crevette magique dans 
 mer des étoiles

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

//Initialisation des variables
let args = process.argv.slice(2)
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let arg3 = process.argv[4]
let res = 0
let arrTemp = []
let arrFinal =[]
let separ = arg2
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
function separator(aDecouper, separateur){
    for (let i = 0; i < arg1.length; i++) {

        let indexSepar = 0

        //on définit la taille du séparateur
        let separatorLen = separateur.length

        //On ajoute le premier morceau
        if (i==0) {
            //On récupère l'index de la premiere itération du séparateur
            indexSepar = aDecouper.indexOf(separateur);
            arrFinal.push(aDecouper.slice(i, indexSepar))

            //On récupère l'autre morceau de la chaine
            arrTemp = aDecouper.slice(indexSepar+separatorLen).trim()
        }

        //Si il n'y a plus d'autre separateur 
        if (arrTemp.indexOf(separateur) == -1) {
            
            arrFinal.push(arrTemp)
            return arrFinal.join("\n")
        } else {
            //Il reste encore des separateurs dans la string

            //on redéfini l'index de notre separateur sur le reste de la string et on l'ajoute à notre rendu arrFinal
            indexSepar = arrTemp.indexOf(separateur)
            arrFinal.push(arrTemp.slice(0, indexSepar))

            //On redéfini la valeur du arrTemp par ce qui reste de la chaine
            arrTemp = arrTemp.slice(indexSepar+separatorLen).trim()
        }
    }

    //return avec affichage ligne par ligne
    return arrFinal.join("\n")
}

//Gestion d'erreurs
if (arg2 == undefined) {
    console.log("Il n'y a qu'un seul argument");
    return
}

if (arg1 == undefined || arg2 == undefined || arg3 !== undefined) {
    console.log("Merci d'entrer que 2 arguments valables");
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

//Problème non résolu 
/*
Si j'ai une phrase qui contient dans un mot le séparateur il ne passe pas au dessus du mot exemple avec : 
'Crevette la mer la testest la blague la test1' 'la'

j'ai pensé à vérifier l'index trouvé plus la taille du séparator +1 
et voir si la string est égale à separator 
dans l'exemple ici ça ferait pour blague que = lag, lag !== la
mais je gère mal ma boucle donc je ne saurais skipper l'élément
mais je pense avoir compris l'essentiel de l'exo je passe à la suite
*/