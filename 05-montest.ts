
var myObj =function(name, options){
    this.options = options || {},
    this.options.vararg = options.vararg || "varargs",
    this.name = name || "THIBAUT" 
}

myObj.prototype.hello = function(){
    console.log("hello " + this.name + " " + this.options.vararg);
}
var user = new myObj("THIB",{vararg:"dd"});

user.hello();

var addition = function addition2(nb1, nb2) {
    return Number(nb1) + Number(nb2);
};
console.log(addition(2, 3)); // 5


console.log(user);
console.log(user.prototype);

var indi = false;

if(indi){
    console.log("TRUE");
}else{
    console.log("FALSE");
}

var firstNames = ['Eric', 'Romain', 'Jean', 'Eric', 'Jean'];
firstNames
.filter(firstName => firstName.length === 4) // filtre ceux de 4 lettres
.map(firstName => firstName.toUpperCase()) // transforme en majuscule
.sort() // trie croissant
.reverse() // inverse l'ordre
.forEach(firstName => console.log(firstName)); // affiche