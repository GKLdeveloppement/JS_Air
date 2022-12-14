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

//tableau comprenant les algos et leur TU
const algoTestsSet = {
    air00 : { //done
        1 : {
            input : ["air00.js", "Bonjour les gars"],
            output : "Bonjour \nles \ngars\n"
        },
        2 : {
            input : ["air00.js", "BonjourLesGars CommentCaVa"],
            output : "BonjourLesGars \nCommentCaVa\n"
        },
        3 : {
            input : ["air00.js", "234"],
            output : "Ce script ne peut prendre que des lettres/mots en arguments\n"
        }
    },
    air01 : {
        1 : { //done
            input : ["air01.js", "je veux une belle pièce", "une"],
            output : "je veux \nbelle pièce\n" 
        },
        2 : {
            input : ["air01.js", "la crevette la crevette", "la", "la"],
            output : "Merci d'entrer que 2 arguments valables\n"
        }
    },
    air02 : { //done
        1 : {
            input : ["air02.js", "Je", "teste", "des", "trucs", " "],
            output : "Je teste des trucs\n" 
        },
        2 : {
            input : ["air02.js", "Je", "teste", "des", "trucs", "-"],
            output : "Je-teste-des-trucs\n"
        }
    },
    air03 : { //done
        1 : {
            input : ["air03.js", 1, 5, 1],
            output : "[ '5' ]\n"
        },
        2 : {
            input : ["air03.js", 1, 2],
            output : "Merci d'entrer 3 arguments minimum valables\n"
        }
    },
    air04 : { //done
        1 : {
            input : ["air04.js", "Hello milady,   bien ou quoi ??"],
            output : "Helo milady, bien ou quoi ?\n" 
        },
        2 : {
            input : ["air04.js", "la crevette"],
            output : "la crevete\n"
        },
        3 : {
            input : ["air04.js", "la crevette", "test"],
            output : "Merci d'entrer 1 arguments valables\n"
        }
    },
    air05 : { //done
        1 : {
            input : ["air05.js", 1, 2 , 3 , 4 , 5, "+2"],
            output : "3 4 5 6 7\n" 
        },
        2 : {
            input : ["air05.js", 10, 11 , 12 , 20 , "-5"],
            output : "5 6 7 15\n" 
        },
        3 : {
            input : ["air05.js", "la", "la", "la"],
            output : "Ce script ne peut prendre que des chiffres en arguments\n"
        }
    },
    air06 : { //done
        1 : {
            input : ["air06.js", "Michel", "Albert" , "Thérèse" , "Benoit" , "t"],
            output : "Michel\n" 
        },
        2 : {
            input : ["air06.js", "Franck", "Baptiste" , "Thérèse" , "Benoit" , "a"],
            output : "Thérèse, Benoit\n" 
        },
        3 : {
            input : ["air06.js", "la", "la", "la"],
            output : "Le comparant qui doit être proposer ne doit contenir qu'une seule lettre, exemple : 'a'.\n"
        }
    },
    air07 : { //done
        1 : {
            input : ["air07.js", 1, 3 , 4 , 2],
            output : "[ '1', '2', '3', '4' ]\n"
        },
        2 : {
            input : ["air07.js", 10, 20 , 30 , 40 , 33],
            output : "[ '10', '20', '30', '33', '40' ]\n" 
        },
        3 : {
            input : ["air07.js", "la", "la", "la"],
            output : "Ce script ne peut prendre que des chiffres en arguments\n"
        }
    },
    air08 : { //done
        1 : {
            input : ["air08.js", 10, 20, 30, "fusion", 15, 25, 35,],
            output : "10 15 20 25 30 35\n" 
        },
        2 : {
            input : ["air08.js", 10, 20, 30, 15, 25, 35,],
            output : "Merci d'entrer le mot clé fusion entres les 2 tableaux\n"
        },
        3 : {
            input : ["air08.js",  10, 20, 30, "fusion", "test", 25],
            output : "Ce script ne peut prendre que des chiffres en arguments sauf le mot clé fusion\n"
        }
    },
    air09 : { //done
        1 : {
            input : ["air09.js", "Michel", "Albert", "Thérèse", "Benoit"],
            output :"Albert, Thérèse, Benoit, Michel\n" 
        },
        2 : {
            input : ["air09.js"],
            output : "Merci d'entrer 2 arguments minimum valables\n" 
        },
        3 : {
            input : ["air09.js", 10, 11 , 12 , "test"],
            output : "Ce script ne peut prendre que du texte en arguments\n"
        }
    },
    air10 : { //done
        1 : {
            input : ["air10.js", "a.txt"],
            output : "je danse\n\n" 
        },
        2 : {
            input : ["air10.js", "test", "bug"],
            output : "Merci d'entrer 1 arguments minimum valables\n" 
        },
        3 : {
            input : ["air10.js", 10],
            output : "Ce script ne peut prendre que des lettres/mots en arguments\n"
        }
    },
    air11 : { //done
        1 : {
            input : ["air11.js", "O", 2],
            output : " O\nOOO\n" 
        },
        2 : {
            input : ["air11.js", "T", 4],
            output : "   T\n  TTT\n TTTTT\nTTTTTTT\n" 
        },
        3 : {
            input : ["air11.js", 1, 4],
            output : "Ce script doit contenir en premier argument un charactère.\n"
        }
    },
    air12 : { //done
        1 : {
            input : ["air12.js", 6, 5, 4, 3, 2, 1],
            output : "[ '1', '2', '3', '4', '5', '6' ]\n"
        },
        2 : {
            input : ["air12.js", 6, 5, 4, 7, 2, 9],
            output : "[ '2', '4', '5', '6', '7', '9' ]\n" 
        },
        3 : {
            input : ["air12.js", "la", "la", "la"],
            output : "Ce script ne peut prendre que des chiffres en arguments\n"
        }
    },
    air14 : {
        1 : {
            input : ["air14.js"],
            output : "Encore une masterclass du joueur Franco-Turc, maintenant c'est tout droit\n"
        }
    }
}


//f() utilisés

/**
 * 
 * Permet de vérifier si le TU est bon ou pas et en fonction d'afficher le résultat en vert ou en rouge
 * 
 * @param {*} resultatTU 
 * @param {*} resAttendu 
 * @param {string} algoName 
 * @param {integer} testAlgoNb 
 * @param {integer} nbOfTestInAlgo 
 */
function verificationResult(resultatTU, resAttendu, algoName, testAlgoNb, nbOfTestInAlgo) {
    if ( resultatTU == resAttendu ) {
        //Si c'est bon, on retourne le "success"
        console.log("\x1b[32m"+algoName+".js ("+ testAlgoNb +"/"+ nbOfTestInAlgo +") : success \x1b[0m");
        // console.log(resultatTU);
    } else {
        //Si c'est pas bon, on retourne le "failure"
        console.log("\x1b[31m"+algoName+".js ("+ testAlgoNb +"/"+ nbOfTestInAlgo +") : failure \x1b[0m");
    }
}


/**
 * Main f()
 * Permet de faire les TU de tous les algos présents dans le dossier
 * @param {object} algoTestsSet 
 */
function epreuveAirTU(algoTestsSet) {

    //on vient définir le tableau des noms d'algo
    let algoTests = Object.keys(algoTestsSet);

    //Pour chacun de ces algo présent dans notre objet
    for (let i = 0; i < algoTests.length; i++) {

        //on va chercher le contenu d'un algo
        let algoName = algoTests[i]
        let algos = algoTestsSet[algoName]
        let nbOfTestInAlgo = Object.keys(algos).length;


        //On boucle dessus
        Object.keys(algos).forEach(key => {
            //On récupère tous le contenu
            const testData = algos[key];

            //On affecte ensuite le contenu dans les bonnes variables
            let args = testData.input
            let resAttendu = testData.output
            // console.log(resAttendu);

            //On éxécute le script et on stock son résultat
            let resultatTU = spawn('node', args).stdout.toString();
            // console.log("retour: "+resultatTU);
        
            //On compare les résultats attendus et ce qui est retourné par le script et on affiche le succes ou le fail
            verificationResult(resultatTU, resAttendu, algoName, key, nbOfTestInAlgo)
        
        });
    }
}

//Gestion d'erreurs
if (arg1 !== undefined) {
    console.log("Aucun argument n'est accepté.");
    return
}

//Affichage résultat
epreuveAirTU(algoTestsSet);
