/**
 * Created by Administrateur on 12/12/2016.
 */
console.log("Hello");
var id = setInterval(function intervalHandler() {
    console.log('ls');
}, 1000);
setTimeout(function timeoutHandler() {
    console.log('Bye');
    clearInterval(id); // desinscrire la boucle de l'event loop
}, 4500);
//# sourceMappingURL=01-hello.js.map