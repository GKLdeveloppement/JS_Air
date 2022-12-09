/* --- Le roi des tris ---

Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri rapide (QuickSort).

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_quick_sort(array) {
	# votre algorithme
	return (new_array)
}


Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6



Afficher error et quitter le programme en cas de problèmes d’arguments.


Wikipedia vous présentera une belle description de cet algorithme de tri.

*/

//Initialisation des variables
let args = process.argv.slice(2)
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let lastItem = parseInt(args.length -1)
let res = ""
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

//fonction permettant déchanger des items de place
function exchange(items, leftIndex, rightIndex){
    //méthode utilisé dans les f() de tri voir les anciens exos
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

//function permettant la partition du tableau de base
function partition(item, left, right) {
    let pivot = item[Math.floor((right + left) / 2)] //On choisit l'élément du milieu comme pivot
    let i = left //curseur de gauche
    let j = right //curseur de droite
    //tant que le chiffre de gauche est <= à celui de droite
    while (i <= j) {
        //tant que i est inf au pivot on avance vers le pivot (on va vers la droite)
        while (parseInt(item[i]) < pivot) {
            i++;
        }

        //tant que j est inf au pivot on recule vers le pivot (on va vers la gauche)
        while (parseInt(item[j]) > pivot) {
            j--;
        }

        if (i <= j) {
            exchange(item, i, j); //échange les 2 éléments pour remettre les éléments dans le bon coté du pivot
            i++;
            j--;
        }
    }
    return i;
}

//Main f()
function quickSort(items, left, right) {
    let index = 0

    index = partition(items, left, right);
    if (left < index - 1) { //il y a plus d'élément à guche du pivot
        quickSort(items, left, index - 1);
    }
    if (index < right) { //il y a plus délément à droit du pivot
        quickSort(items, index, right);
    }

    return items;
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
let result = quickSort(args, 0, lastItem)

//Affichage résultat
console.log(result);