/*let string = "string";
let sentence = "Hello " + "Brian";
let sentence2 = " and Kenny";
/*let combine = sentence + sentence2;
let combine = `${sentence}${sentence2}`;

let student1 = "Amy";
let student2 = "Becky";
let courseName = "AP COMP SCI";
let teacherName = "Whalen";
let longSentence = `${student1} and ${student2} will be taking 
${courseName} with ${teacherName} next year.`;
console.log(longSentence);

let year = 2020;
let nextYear = 2020 + 1;
let past = 2020 / 2;
let farFuture = 2020 * 50;

let trueStatement = true;
let falseStatement = false;

let Ron;
console.log(Ron);

let student = "Caroline";
let age = 15;

console.log(student === "Caroline")
console.log(student === "caroline")

console.log("Brian");

let school = "Elementary";
if (school === "Elementary"){
    console.log("You are in k-5");
}   else if (school === "Middle") {
    console.log ("You are in 6, 7, or 8th grade");
}   else {
    console.log("You are in HS");
}*/

/*let light = "green";

if (light === "green") {
    console.log("go");
} else if (light === "yellow") {
    console.log("caution");
} else {
    console.log("stop");
}

let kristyLactInt = "true";
let baoBaoLactint = "false";

if (kristyLactInt === true &&  baoBaoLactint == true) {
    console.log("Get Almond Milk");
} else if (kristyLactInt === true || baoBaoLactint == 
true) {
    console.log ("Get Both");
} else {
    console.log("Only milk");
}

let temp = 69;

if (temp < 68) {
    console.log("too cold");
} else if (temp >= 68 && temp <= 72) {
    console.log("perfect");
} else if (temp > 72 && temp <= 76 ) {
    console.log("warm");
} else {
    console.log ("too hot");
}*/

/*function test() {
    console.log("TEST");
}
test ();

function argument(name1, name2) {
    console.log(name1, name2);
}
argument("brian", "kenny");*/

/*const add = function(x,y){
    return x + y; //immediately ends the function
};
console.log(add(10, 3))*/

/*const hello = function() {
    alert("hello");
};
const bye = function() {
    alert("bye");
};

const beatles = function() {
    hello()
    bye()
    hello()
    bye()
}
beatles();*/

/*function makeFunc() {
    //closure
    //function scope
    const name = "Whalen"; 
    function displayName(){
        alert(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();*/

/*const names = ["Bob", "Ingrid", "Tucker", "Chris", "Hal"];
//names.push("Caroline");
//let newNames = names.unshift("Brian");
names.forEach(name => console.log(name));

const numbers = [1, 2, 3]

const add = function(x, y, z) {
    return x + y + z
}
console.log(add(...numbers))*/

let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
const result = students.filter(students => students.length > 4);
console.log(result);

let students2 = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
console.log(students2.includes("Junshen"));

let students3 = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
console.log(students3.includes("Alan", "Saava"))





