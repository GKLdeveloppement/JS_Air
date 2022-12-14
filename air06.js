/* --- Contrôle de pass sanitaire ---

Créez un programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.

Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, string) {
	# votre algorithme
	return (nouvel_array_de_strings)
}


Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “t”
Michel

$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “a”
Michel, Thérèse, Benoit



Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

//Initialisation des variables
let args = process.argv.slice(2)
let liste = args.slice(0, args.length-1)
let lastItem = args[args.length-1]
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let res = ""
let finalListe = []
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
function controleContain(liste, comparant){
    //On parcours la liste de mots fournis en args
    for (let i = 0; i < liste.length; i++) {
        let count = 0
        //On définit chaque mot
        let argx = liste[i]

        //On boucle sur toutes les lettres de ce mot
        for (let y = 0; y < argx.length; y++) {
            let lettreComparee = argx[y].toLowerCase()
            //Si elle est égale à ce qu'on cherche on incrémente la variable
            if (lettreComparee == comparant) {
                count++
            }
        }
        //Si le compte est supérieur à 0 on passe au mot suivant sinon on ajoute le mot à l'array
        if (count < 1) {
            finalListe.push(argx)
        }
    }

    return finalListe.join(", ")

}

//Gestion d'erreurs

//gérer que ça fasse qu'un seul caractère
if (lastItem.length > 1) {
    console.log("Le comparant qui doit être proposer ne doit contenir qu'une seule lettre, exemple : 'a'.");
    return
}

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
let result = controleContain(liste, lastItem)

//Affichage résultat
console.log(result);