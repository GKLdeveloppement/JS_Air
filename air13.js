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

//Import de dépendances
const spawn = require('child_process').spawnSync;


//Initialisation des variables
let arg1 = process.argv[2]

let sucessNb = 0
let totalTestNb = 0
let testNumber = 1
const successGreenString = "\x1b[32m success \x1b[0m"
const failureRedString = "\x1b[31m failure \x1b[0m"

//remplir le tableau d'un test pour chaque épreuve ou un objet avec une key et plusieurs tests avec les res attendus par algo
const algoTestsSet = {
    // air00 : [["Bonjour les gars", "Bonjour \nles \ngars\n"],["BonjourLesGars CommentCaVa","BonjourLesGars \nCommentCaVa\n"], ["234", "Ce script ne peut prendre que des lettres/mots en arguments\n"]],
    // air01_ : [[["je veux une belle pièce" +" une"]], "je veux\nbelle pièce\n"],
    air01 : {
        1 : {
            input : ["je veux une belle pièce"] ["une"], 
            output : "je veux\nbelle pièce\n" 
        },
        2 : {
            input : ["la crevette la crevette"] ["la"],
            output : "Merci d'entrer que 2 arguments valables\n"
        }
    }
}



//f() utilisées


/**
 * 
 * @param {*} resultatTU 
 * @param {*} resAttendu 
 * @param {string} algoName 
 * @param {int} testNumber 
 * @param {int} totalTestNb 
 */
function verificationResult(resultatTU, resAttendu, algoName, testNumber, totalTestNb) {
    if (resultatTU == resAttendu ){
        //Si c'est bon, on retourne le "success"
        console.log(algoName+" ("+ testNumber + "/" + tests.length +") :"+ successGreenString);
    } else {
        //Si c'est pas bon, on retourne le "failure"
        console.log(algoName+" ("+ testNumber + "/" + tests.length +") :"+ failureRedString);
    }
}


//Main f()
function apreuveAirTU(algoTestsSet){

    //Pour chaque élément de l'objet on traite un lago à la fois
    Object.keys(algoTestsSet).forEach(algoName => {
        
        //On récupère tous les tests lié à l'algo 
        let tests = algoTestsSet[algoName]

        //On réinitialise le nombre de test par algo 
        testNumber = 1

        //Pour chaque numéro de test contenu dans un algo
        let testNbForAlgo = Object.keys(tests);
        // for (let i = 0; i < testNbs.length; i++) {
        //     let testNb = testNbs[i];
        //     console.log(testNb + ': ' + tests[testNb]);
        // }

        //Pour chacun de ses tests
        testNbForAlgo.forEach(test => {

            console.log("TU N° : " +test);
            console.log("args : " + (test[1]));
            console.log("resAttendu : " +test.output);
            // let casTestU = test[0]
            // let resAttendu = test[1]

            // let fileName = algoName+'.js'
            // totalTestNb = tests.length

            // //lancer le script et stocker le resultat
            // let resultatTU = spawn('node',[fileName, casTestU]).stdout.toString();

            // //Comparer le résultat avec ce qu'on attends normalement
            // verificationResult(resultatTU, resAttendu, algoName, testNumber, totalTestNb)


            // //on incrémente pour connaître le numéro du test effectué sur le resultat total
            // testNumber ++
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
let result = apreuveAirTU(algoTestsSet)

//Affichage résultat
console.log(result);