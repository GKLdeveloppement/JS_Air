/* --- Meta exercice ---

Créez un programme qui vérifie si les exercices de votre épreuve de l’air sont présents dans le répertoire et qu’ils fonctionnent (sauf celui là). Créez au moins un test pour chaque exercice.


Exemples d’utilisation :
$> python exo.py
air00 (1/3) : success
air00 (2/3) : success
air00 (3/3) : success
air01 (1/2) : success
air01 (2/2) : failure
air02 (1/1) : success
... 
Total success: (56/62)


Bonus : trouvez le moyen d’utiliser du vert et du rouge pour rendre réussites et échecs plus visibles.


*/

//Initialisation des variables
let arg1 = process.argv[2]

let sucessNb = 0
let totalTestNb = 0
let testNumber = 1
const successGreenString = "\x1b[32m success \x1b[0m"
const failureRedString = "\x1b[31m failure \x1b[0m"

//f() utilisées
//Main f()
function apreuveAirTU(){
    const spawn = require('child_process').spawnSync;
    // let finalRes = spawn('node',['air00.js', 'Bonjour les gars']).stdout.toString();
    // let finalRes = spawn('node',['air01.js', "Crevette magique dans la mer des étoiles", "la"]).stdout.toString();

    //remplir le tableau d'un test pour chaque épreuve ou un objet avec une key et plusieurs tests avec les res attendus par algo
    const algoTestsSet = {
        // air00 : [["Bonjour les gars", "Bonjour \nles \ngars\n"],["BonjourLesGars CommentCaVa","BonjourLesGars \nCommentCaVa\n"], ["234", "Ce script ne peut prendre que des lettres/mots en arguments\n"]],
        air01 : [[["je veux une belle pièce" +" une"]], "je veux\nbelle pièce\n"] 
        //,["'la crevette la crevette' 'la' 'la'","Merci d'entrer que 2 arguments valables\n"]],
    }

    //Tout passer sous la forme d'un array pour les tests 
    /*
    Ou alors numéroter les test dans l'objet ( ex algotest = {
        air01 : {
            1 : [["je veux une belle pièce"] ["une"]], "je veux\nbelle pièce\n", 
            2 : ["'la crevette la crevette' 'la' 'la'","Merci d'entrer que 2 arguments valables\n"]], 
            etc etc
            ou encore rentrer plus dans le détails avec un truc dans le genre :

            1 : {
                input : ["je veux une belle pièce"] ["une"]
                output : "je veux\nbelle pièce\n" 
            }
        }

    })
    */

    //Pour chaque élément de l'objet on traite un lago à la fois
    Object.keys(algoTestsSet).forEach(algoName => {
        
        //On récupère tous les tests lié à l'algo 
        let tests = algoTestsSet[algoName]

        //On réinitialise le nombre de test par algo 
        testNumber = 1

        //Pour chacun de ses tests
        tests.forEach(test => {

            let casTestU = test
            // let resAttendu = "je veux\nbelle pièce\n" //test[1]
            let fileName = algoName+'.js'

            //lancer le script et stocker le resultat
            let resultatTU = spawn('node',[fileName, casTestU]).stdout.toString();
            console.log(test);
            // console.log(typeof casTestU);
            // console.log("resattendu:" + resAttendu);
            console.log("res: "+resultatTU);

            //Comparer le résultat avec ce qu'on attends normalement
            if (resultatTU == resAttendu ){
                //Si c'est bon, on retourne le "success"
                console.log(algoName+" ("+ testNumber + "/" + tests.length +") :"+ successGreenString);
            } else {
                //Si c'est pas bon, on retourne le "failure"
                console.log(algoName+" ("+ testNumber + "/" + tests.length +") :"+ failureRedString);
            }
            
            //on incrémente pour connaître le numéro du test effectué sur le resultat total
            testNumber ++
        })
    })

    return 0
}

//Gestion d'erreurs
if (arg1 !== undefined) {
    console.log("Aucun argument n'est accepté.");
    return
}


//Traitement
let result = apreuveAirTU()

//Affichage résultat
console.log(result);