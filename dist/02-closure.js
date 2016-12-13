/**
 * Created by Administrateur on 12/12/2016.
 */
var logClosure = function (msg) {
    var interne = function () {
        console.log(msg);
    };
    return interne;
};
var hello = logClosure('Hello');
// la portée de hello est concervée
hello();
/*"Need a closure to correctly display i:*/
for (var i = 0; i < 3; i++) {
    setTimeout(function timeoutHandler() {
        console.log(i);
    }, 1000);
}
/*"Use of closure to correctly display i:*/
for (var i = 0; i < 3; i++) {
    setTimeout(logClosure(i), 1000);
}
var _loop_1 = function (i_1) {
    setTimeout(function timeoutHandler() {
        console.log(i_1);
    }, 1000);
};
/*"Use ES6 to correctly display i:*/
for (var i_1 = 0; i_1 < 3; i_1++) {
    _loop_1(i_1);
}
