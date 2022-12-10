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
let res = ""

//f() utilisées
//Main f()
function apreuveAirTU(){
    const spawn = require('child_process').spawnSync;
    // let finalRes = spawn('node',['air00.js', 'Bonjour les gars']).stdout.toString();
    // let finalRes = spawn('node',['air01.js', "Crevette magique dans la mer des étoiles", "la"]).stdout.toString();

    //remplir le tableau d'un test pour chaque épreuve ou un objet avec une key et plusieurs tests avec les res attendus par algo
    const algoTestsSet = {
        air00 : [["Bonjour les gars", "Bonjour \nles \ngars\n"],["BonjourLesGars CommentCaVa","BonjourLesGars \nCommentCaVa\n"], ["234", "Ce script ne peut prendre que des lettres/mots en arguments\n"]],
        // air02 : [["test3", "res3"],["test4","res4"]],
    }
    
    //On va stocker tous les résultats dedans pour les afficher à la fin
    let resulArr = []

    // console.log("\x1b[32m Rendu en couleur verte \x1b[0m");
    // console.log("\x1b[31m Rendu en couleur rouge \x1b[0m");

    //Pour chaque élément de l'objet on traite un lago à la fois
    Object.keys(algoTestsSet).forEach(algoName => {
        
        //On récupère tous les tests lié à l'algo 
        let tests = algoTestsSet[algoName]
        console.log(algoName);

        //Pour chacun de ses tests
        tests.forEach(test => {
            // console.log("test =" + test[0] + " et attendu : " + test[1]);
            // console.log(algoTestsSet[key]);

            let casTestU = test[0]
            let resAttendu = test[1]

            //lancer le script et stocker le resultat
            let resultatTU = spawn('node',[algoName+'.js', casTestU]).stdout.toString();
            console.log(resultatTU);

            //Comparer le résultat avec ce qu'on attends normalement
            if (resultatTU == resAttendu ){
                console.log("\x1b[32m success \x1b[0m");
            } else {
                console.log("\x1b[31m failure \x1b[0m");
            }
            
            //si ok return du vert sinon du rouge

            //Stocker les return dans resulArr et passer au suivant
        })


    })

    // for (let i = 0; i < 13; i++) {
    //         //récupérer les tests dans l'objet 

    //         //executer les TU et stocker les résultats dans un tableau avec (fail/success)

    // }

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