/* --- Insertion dans un tableau trié ---

Créez un programme qui ajoute à une liste d’entiers triée un nouvel entier tout en gardant la liste triée dans l’ordre croissant. Le dernier argument est l’élément à ajouter.

Utilisez une fonction de ce genre (selon votre langage) :
sorted_insert(array, new_element) {
	# your algo
	return (new_array)
}


Exemples d’utilisation :
$> ruby exo.rb 1 3 4 2
1 2 3 4

$> ruby exo.rb 10 20 30 40 50 60 70 90 33
10 20 30 33 40 50 60 70 90


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
function addNbInSortArray(arr, addedItem){
    let finalArr = [...arr]
    finalArr.push(addedItem)

    finalArr = arrSort(finalArr)
    return finalArr
}

//Gestion d'erreurs
if (arg1 == undefined || arg2 == undefined) {
    console.log("Merci d'entrer 2 arguments minimum valables");
    return
}

//Inverse de ma f() isNumber() de l'exo précedent 
if (isNotNumber(args) > 0) {
    console.log("Ce script ne peut prendre que des chiffres en arguments");
    return
}

//Traitement
let result = addNbInSortArray(liste, lastItem)

//Affichage résultat
console.log(result);