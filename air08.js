/* --- Mélanger deux tableaux triés ---

Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.

Utilisez une fonction de ce genre (selon votre langage) :
sorted_fusion(array1, array2) {
	# your algo
	return (new_array)
}


Exemples d’utilisation :
$> ruby exo.rb 10 20 30 fusion 15 25 35
10 15 20 25 30 35


Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

//Initialisation des variables
let args = process.argv.slice(2)
let separatorIndex = args.indexOf("fusion")
let liste1 = args.slice(0, separatorIndex)
let liste2 = args.slice(separatorIndex+1)

let arg1 = process.argv[2]
let arg2 = process.argv[3]
let arg3 = process.argv[4]
let res = ""
let finalListe = []
const nbRegex = /^-?[0-9]\d*(\.\d+)?$/

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


//on ré-invente pas la roue (voir exo de tri épreuve eau)
function arrSort(arr){
    let arrSort = [...arr]
    for (let i = 0; i < arrSort.length-1; i++) {
        //-1 car le dernier élément sera à sa place

        for (let y = 0; y < (arrSort.length -i -1); y++) {

            //On vérifie si les deux sont dans l'ordre
            //ParseInt() obligatoire sinon les dizaines ne sont correctement traités
            if (parseInt(arrSort[y]) > parseInt(arrSort[y+1])) {

                //on défini un var temporaire pour ne pas perdre la valeur qui va ensuite etre modifié
                let temp = arrSort[y]
                arrSort[y] = arrSort[y+1]
                arrSort[y+1] = temp
            }
        }
    }   
    return arrSort
}


//Main f()
function fusionTwoArr(arr1, arr2){
    finalListe = [...arr1]

    for (let i = 0; i < arr2.length; i++) {
        // console.log(arr2[i]);
        finalListe.push(arr2[i])
    }

    //On tri et on return
    finalListe = arrSort(finalListe)
    return finalListe.join(" ")

}

//Gestion d'erreurs
if (arg1 == undefined || arg2 == undefined || arg3 == undefined) {
    console.log("Merci d'entrer 3 arguments minimum valables");
    return
}

if (!args.includes("fusion")) {
    console.log("Merci d'entrer le mot clé fusion entres les 2 tableaux");
    return
}

//Inverse de ma f() isNumber() de l'exo précedent 
if (isNotNumber(args) > 1) {
    console.log("Ce script ne peut prendre que des chiffres en arguments sauf le mot clé fusion");
    return
}

//Traitement
let result = fusionTwoArr(liste1, liste2)

//Affichage résultat
console.log(result);