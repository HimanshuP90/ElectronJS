
Electron:
___________________

Electron is an open source library developed by GitHub for building cross-platform desktop applications with HTML, CSS, and JavaScript. Electron accomplishes this by combining Chromium and Node.js into a single runtime and apps can be packaged for Mac, Windows, and Linux.


Main Process:
Require electron Library
Setup a BrowserWindow Object
Load URLs

-------------------------
Handling Communication
--------------------------

communication between Main/Renderer
ipcMain, ipcRenderer


http://jamesknelson.com/which-build-system-should-i-use-for-my-javascript-app/


-------------------------------------------
Choosing a JavaScript Build Tool: 
Babel, Browserify, Webpack, Grunt, Gulp
-------------------------------------------
1)For compiling and polyfilling ES6, use Babel

2)For bundling your JavaScript files and dependencies into static assets, use Webpack

3)If your have other tasks like renaming files to avoid caching or publishing to the web, automate them with Gulp


______________________________________________________


https://github.com/nolanlawson/hello-electron-with-pouchdb

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Callback: A callback is a function called at the completion of a given task; this prevents any blocking, and allows other code to be run in the meantime.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

ex.

Callback: Function is passed in another function then after something happens(in below something is 3000 milisecond) that function is called invoked

let logCall = function(){
	console.log("locCall was called back.");
};

setTimeout(logCall, 3000); // locCall was called back. after 3 sec

		or

setTimeout(function(){
	console.log("The function was called back.");
}, 3000);
 //locCall was called back. after 3 sec.


 example:

 let stuents = [
	{name: "Marry", score:90, school: "East"},
	{name: "James", score:100, school: "East"},
	{name: "Steve", score:40, school: "East"},
	{name: "Gabe", score:90, school: "West"},
	{name: "Rachel", score:85, school: "East"},
	{name: "Rochelle", score:95, school: "West"},
	{name: "Lynette", score:75, school: "East"}
];

let processStudents = function(data, callback){
	for (let i = 0; i < data.length; i++) {
		if(data[i].school.toLowerCase() === "east") {
			if(typeof callback === "function") {
				callback(data[i]);
			}
		}
	}
}

processStuents(students, function(obj){
	if(obj.score > 60) {
		console.log(obj.name + " passed.");
	}
});


+++++++++++++++++++++++
//first-class functions

The term "first-class" means that something is just a value. A first class function in one that can go anywhere that any other value can go there are few to no restrictions


---------------------------------------------

______________________________________________

Function Declarations VS Function Expressions
_______________________________________________

console.log(doSomething);
doSomething();

function doSomething() {
	console.log("Declare Something");
}

console.log(something);
something();

var something = function() {
	console.log("Express Something");
}



VM5510:1 ƒ doSomething() {
	console.log("Declare Something");
}
VM5510:5 Declare Something
VM5510:8 undefined
VM5510:9 Uncaught TypeError: something is not a function
    at <anonymous>:9:1
(anonymous) @ VM5510:9


--------------Variable is hoisted but function declaration is not hoisted.

______________________________________________________//Functions First Class//___________________________________________________


-------//Example1----------

var num = 28;

var funct = function() {
	console.log("Hello");
};

funct();

o/p: Hello


----------//Example2----------

var arr = [28, function(){console.log("Hi, from an array");}];

arr
(2) [28, ƒ]0: 281: ƒ ()length: 2__proto__: Array(0)

arr[1]();
o/p: Hi, from an array


----------//Example3----------

var obj = {
	num: 20, 
	funct: function() {console.log("Hello from an object");}
};

obj.funct();

O/p: Hello from an object


----------//Example4----------
console.log(28 + (function(){ return 10;})();)

O/p:  38


----------//Example5----------
var addTwo = function(num, fn){
	console.log(num + fn());	
};

addTwo(28, function(){return 28;});

O/P: 56


----------//Example6----------
var returnNumber = function() {return 28};
var returnFun = function() {
	return function(){console.log("Hello for last time.")};
};

var newFun = returnFun();
	newFun();



O/p: Hello for last time.



______________________________________________________//Higher Order Functions//___________________________________________________

Higher Order Functions are functions that operate on other functions by either taking them as arguments or returning them.The fact that JavaScript supports first-class functions makes it possible to create higher order functions.


let things = [
	'Building', 'First', 'Second', "automobile", "bicycle"
];

things
(5) ["Building", "First", "Second", "automobile", "bicycle"]

things.sort()
(5) ["Building", "First", "Second", "automobile", "bicycle"]


//Here I'm using HOF in sort function
things.sort(function(a,b){
	let x = a.toLowerCase();
		y = b.toLowerCase();
	if (x<y) { return -1; }
	if (y<x) { return 1; }
	return 0;
});


(5) ["automobile", "bicycle", "Building", "First", "Second"]



______________________________________________________// What is Coercion?//___________________________________________________

25 + true  // 26
25 + false // 25

i.e.  - * / and % convert to number 

5 - '1' //4
5 + '1' //51

+ convert in string i.e. concatinating 

false, 0, -0, "", NaN, null, undefined convert in false

______________________________________________________// What is Hoisting?//___________________________________________________

Hoisting is a phenomenon in JavaScript where you can access variables and function declarations before they are declared.

hoisting();
function hoisting() {
	console.log(hoist);	
	var what = "Variable and function declarations.";
	console.log("What is hoisted ?" + what);
	var hoist = "to lift or raise up";
	console.log("Hoist means" + hoist);
}


O/P: 
undefined
What is hoisted ?Variable and function declarations.
Hoist meansto lift or raise up

______________________________________________________// Global variables in JavaScript//___________________________________________________

1) Scope is determined lexically
2) JS ises function scope.
3) Nested function creates a scope chain

Avoiding Global Variables
1) Use closure to avoid globals -place the code in a function
2) Use an immediately invoked function expressions(IIFE)
3) Use a single global object
