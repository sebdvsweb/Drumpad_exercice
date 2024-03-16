/*Complète le code ci-dessous*/

    // Récupérer les div qui contiennent les bouton du drumpad dans une constante keys avec querySelector

    // Récupérer les balises audio qui contiennt les sons dans une constante audios avec querySelector


    //Récupère l'évènement quand une touche est cliquée 
window.addEventListener('', function(e) {
    // Décommenter le code ci-dessous si répétition
    // if (e.repeat) {
    //     return
    // }
    
    audios.forEach(audio => {
        if (
            // vérifier si le keyCode de l'argument est égal à l'attribut 'data-key' de l'audio avec la méthode getAttribute()
            ) { 
            // Décommente la ligne ci-dessous si besoin
            // audio.currentTime = 0;

            //Joue le son ici
        
        }
    })
    
    keys.forEach(key => {
        if ( // vérifier si le keyCode de l'argument est égal à l'attribut 'data-key' de la class 'key' avec la méthode getAttribute()
           ) {
            // ajoute la classe playing ici

            //trouve le bon event à mettre dans le addEventListener ci-dessous
            key.addEventListener('', function(e) {
                //supprime la classe playing ici

            })
        }
    })

})

//Ici on déclare une fonction asynchrone pour lancer un beat

async function beatBox() {
    function simulateKey(key) {
        var boxkey = new Event('keydown',{
            bubbles : true
        });
        boxkey.keyCode = key
        window.dispatchEvent(boxkey)
    }
    function playBeat(time,key){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
            resolve(simulateKey(key));
            },time)
        })
        
    }

    await playBeat(50, 90)
    await playBeat(400, 83)
    await playBeat(50, 67)
    await playBeat(420, 83)
    await playBeat(420, 83)
    await playBeat(420, 83)
    
}








   



