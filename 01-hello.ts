/**
 * Created by Administrateur on 12/12/2016.
 */
console.log("Hello");

const id1 = setInterval(function intervalHandler() {
    console.log('ls');
}, 1000);

setTimeout(function timeoutHandler(){
    console.log('Bye');
    clearInterval(id1) // desinscrire la boucle de l'event loop
},4500)


