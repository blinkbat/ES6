
/*
// let vs const

// ES5 

var nameES5 = 'Jane';
var ageES5 = '29';
nameES5 = 'Joan';

// ES6 
// const cannot be mutated
// attempting to do so will throw err
const nameES6 = 'Jane';

// let can mutate
let ageES6 = '29';



// var scope vs block scope

// ES5

function driversLicenseES5(passedTest) {

	if (passedTest) {

		// var gets hoisted, but is yet undefined
		console.log(firstName);

		var firstName = 'John';
		var yearOfBirth = '1990';
	}

	// works because var is function-scoped
	// if outside of function, would throw err
	console.log(firstName + ' was born in ' + yearOfBirth);

}

driversLicenseES5(true);

// ES6

function driversLicenseES6(passedTest) {

	// throws actual err instead of undefined
	// var is hoisted but lives in "dead zone" before declaration
	console.log(firstName);

	const yearOfBirth = '1990';
	let firstName = 'Joe';

	if (passedTest) {
		// in ES6, let and const are block-scoped
		// const cannot be assigned after declaration, but let can (of course)
		// thus this throws an err
		firstName = 'John';
		yearOfBirth = '1990';
	}

	console.log(firstName + ' was born in ' + yearOfBirth);

}

driversLicenseES6(true);



let i = 23;

for (let i = 0; i < 5; i++) {
	console.log(i);
}

// another example of block scope
// this i value is unchanged by the for loop
// if var was used instead, i would be mutated
console.log(i);



// blocks and IIFEs

// ES6
// blocks can simply be created with curlies
{
	const a = 1;
	let b = 2;
	var c = 3;
}
// throws err because of block scope (data privacy)
console.log(a + b);

// accessible because of function scope
console.log(c);

// ES 5 -- much uglier (function "hack")
(function() {
	var c = 3;
})();


// lecture: strings

let firstName = 'John';
let lastName = 'Smith';

const yearOfBirth = 1990;

function calcAge(year) {
	return 2018 - year;
}

// ES5
console.log('The guy\'s name is ' + firstName + ' ' + lastName + '.');
console.log('The guy is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 - we get to use Template Literals. note backticks, etc
console.log(`The guy's name is ${firstName} ${lastName}.`);
console.log(`The guy is ${calcAge(yearOfBirth)} years old.`);

// new str methods

const nameStr = `${firstName} ${lastName}`;

console.log( nameStr.startsWith('J') ); // true
console.log( nameStr.endsWith('h') ); // true
console.log( nameStr.includes('oh') ); // true

console.log( firstName.repeat(5) );



// arrow functions lecture

const years = [1990, 1965, 1942, 1912, 1896];

// ES5

var agesES5 = years.map( function(year) {
	return 2018 - year;
});

console.log(agesES5);



// ES6

// fat arrow func -- one liner = no {}, return implicit 
/*
const agesES6 = years.map(year => 2008 - year);

console.log(agesES6);


const agesStr = years.map( (year, index) =>
	`Age element ${index + 1}: ${2016 - year}.`);

console.log(agesStr);

const agesStr2 = years.map( (year, index) => {
	const now = new Date().getFullYear();
	const age = now - year;
	return `Age element ${index + 1}: ${age}.`;
});

console.log(agesStr2);



// ES5
var boxES5 = {
	color: 'green',
	position: 1,

	clickMe: function() {

		var self = this;

		document.querySelector('.green').addEventListener('click', function() {

				var str = 'This is box number ' + self.position + '. ';
				str += 'This box is ' + self.color + '.';

				alert(str);

		})
	}
}

//boxES5.clickMe();

// ES6
var boxES6 = {
	color: 'green',
	position: 1,

	clickMe: function() {

		// var self = this; <- this isn't necessary with fat arrow func
		// this keyword applies to obj holding callback

		// ALWAYS use arrow func to preserve value of 'this'

		document.querySelector('.green').addEventListener('click', () => {

				var str = 'This is box number ' + this.position + '. ';
				str += 'This box is ' + this.color + '.';

				alert(str);

		})
	}
}

boxES6.clickMe();



// ES5

function Person(name) {
	this.name = name;
}

Person.prototype.myFriendsES5 = function(friends) {

	var arr = friends.map( function(friend) {
		return this.name + ' is friends with ' + friend + '.';

	// use .bind to set correct 'this' keyword	
	}.bind(this) );

	console.log(arr);

}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriendsES5(friends);



// ES6

function Person(name) {
	this.name = name;
}

Person.prototype.myFriendsES6 = friends => {

	let arr = friends.map( 
		friend => `${this.name} is friends with ${friend}.`
	);

	console.log(arr);

}

let friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriendsES6(friends);




// lecture: destructuring

// ES5

var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6

// creates two separate consts
const [name, age] = ['John', 26];

const obj = {
	firstName: 'John',
	lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);



function calcRetirement(year) {

	const age = new Date().getFullYear() - year;

	return [age, 65 - age];

}

const [age, retirement] = calcRetirement(1990);

console.log(age);
console.log(retirement);

*/
/*

// lecture: arrays

const boxes = document.querySelectorAll('.box');


// ES5

boxesArrES5 = Array.prototype.slice.call(boxes);

boxesArrES5.forEach( function(box) {
	box.style.backgroundColor = 'blue';
});


// super easy way to turn node list into arr
const boxesArrES6 = Array.from(boxes);

Array.from(boxes).forEach(box => box.style.backgroundColor = '#ddd');
*/

/*
// ES5

for (var i = 0; i < boxesArrES5.length; i++) {

	if (boxesArrES5[i].className === 'box blue') {
		// continue = skip this iteration, break = break loop
		continue;
	}

	boxesArrES5[i].style.color = 'blue';
	boxesArrES5[i].textContent = 'I changed to blue!';

}
*/

/*
// ES6

for (const curr of boxesArrES6) {
	if ( curr.className.includes('blue') ) {
		// continue = skip this iteration, break = break loop
		continue;
	} else {
		curr.style.color = 'blue';
		curr.textContent = 'I changed to blue!';
	}
}



// ES5

var ages = [12, 14, 8, 21, 8];

var grownArr = ages.map( function(age) {
	return age >= 18;
});

console.log(grownArr);

console.log( grownArr.indexOf(true) );
console.log(ages[ grownArr.indexOf(true) ]);



// ES6

console.log( ages.findIndex(age => age >= 18) );
console.log( ages.find(age => age >= 18) );

*/
/*
// spread operator lecture

function addFourAges(a, b, c, d) {
	return a + b + c + d;
}

var ageArr = [12, 18, 30, 21];

// ES5

// apply must specify 'this' var
var sum = addFourAges.apply(null, ageArr);

console.log(sum);

//ES6

// ... is spread operator, same as calling apply?
const sumES6 = addFourAges(...ageArr);
console.log(sumES6);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Anne'];

// expand arrs into new flat arr -- siiick
const bigFamily = [...familySmith, ...familyMiller, 'Lily'];
console.log(bigFamily);

const h1 = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h1, ...boxes];

Array.from(all).forEach(
	curr => curr.style.backgroundColor = "#ddd"
);

console.log(all);

*/
/*
// rest parameters lecture

// ES5

// limit here is first number passed in arg arr
function isFullAge(limit) {
	// use dynamic arguments var instead of static arg amount
	// arguments is an Object, not Array -- an array-like
	console.log(arguments);

	// convert obj to arr -- here starts at position 1 excluding 0
	var args = Array.prototype.slice.call(arguments, 1);

	args.forEach( function(curr) {

		console.log( (2018 - curr) >= limit );

	});

}

isFullAge(21, 1956, 1997, 2014);


// ES6

// spread args into array for use in func
// much simpler usage, less code, yay
function isFullAgeES6(limit, ...years) {

	console.log(years);

	years.forEach(
		curr => console.log( (2018 - curr) >= limit ) 
	);


}

isFullAgeES6(1956, 1999, 2014, 2016, 1908, 1987);

*/
/*

// default parameters lecture

// ES5

function SmithPerson (firstName, lastName, yearOfBirth, nationality) {

	// if arg undefined, assign it 'Smith', else leave it 
	lastName === undefined ? lastName = 'Smith' : lastName = lastName;
	nationality === undefined ? nationality = 'Canadian' : nationality = nationality;

	this.firstName = firstName;
	this.lastName = lastName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;

}


// ES6

// assign undefined params in the function constructor itself
function SmithPersonES6(firstName, lastName = 'Smith', yearOfBirth, nationality = 'Canadian') {

	this.firstName = firstName;
	this.lastName = lastName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;

}

// unspecified args are undefined
var john = new SmithPersonES6('John', undefined, 1990);
console.log(john);

var emily = new SmithPersonES6('Emily', 'Warren', 1983);
console.log(emily);

*/
/*
// maps lecture

// check out set, get, has, delete, clear methods

const question = new Map();

question.set('question', 'What\'s the official name of the newest JS version?');

question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'PoopyScript2015');
question.set(4, 'ES2015');

question.set('correct', 4);

question.set(true, 'You got it dude.');
question.set(false, 'That ain\'t it, fam.');

console.log( question.get('question') );
console.log(question.size);

//if ( question.has(3) ) { question.delete(3); }

console.log(question);

//question.clear();

console.log(question);


// maps are iterable (can be looped thru), unlike objects

//question.forEach( (value, key) => console.log(`The key: ${key}, the value: ${value}.`) );

for ( let [key, value] of question.entries() ) {
	//console.log(`The key: ${key}, the value: ${value}.`);

	// typeof method determines str of key type -- number, string, etc
	if ( typeof(key) === 'number' ) {
		console.log(`Answer: ${key}: ${value}.`);
	}

}

// parseInt to convert answer into number
const ans = parseInt( prompt('Write the correct answer fool.') );

// if correct, will be true, else false -- concise
// inner get does comparison, outer get fetches t/f string
console.log( question.get( ans === question.get('correct') ) );

*/
/*
// classes lecture

// ES5

var PersonES5 = function(name, yearOfBirth, job) {

	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;

}

PersonES5.prototype.calculateAge = function() {

	var age = new Date().getFullYear() - this.yearOfBirth;

	console.log(age);

}

var john5 = new PersonES5("John", 1990, "Teacher");



// ES6

// classes are not hoisted, so they must be introduced before being used.
// you can only add methods to classes, not properties --
// inheriting properties to obj instances is NOT good practice anyway!
class Person {

	constructor(name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	} 

	// no prototyping necessary in es6 classes
	calculateAge() {

		var age = new Date().getFullYear - this.yearOfBirth;

		console.log(age);

	} 

	static greeting() {
		console.log("Wassup B?");
	}

} 

const john6 = new Person("Johnny", 1991, "Professor");

Person.greeting();

*/



// classes with subclasses lecture

// ES5

var PersonES5 = function(name, yearOfBirth, job) {

	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;

}

PersonES5.prototype.calculateAge = function() {

	var age = new Date().getFullYear() - this.yearOfBirth;

	console.log(age);
}

var AthleteES5 = function(name, yearOfBirth, job, olympicGames, medals) {

	// note to set the this arg to this (newly created obj inst)
	PersonES5.call(this, name, yearOfBirth, job);
	this.olympicGames = olympicGames;
	this.medals = medals;

}

// use object.create to manually set prototype of obj
// now the constructors are connected
AthleteES5.prototype = Object.create(PersonES5.prototype);

// you can only add methods AFTER creating prototype property
AthleteES5.prototype.wonMedal = function() {

	this.medals++;
	console.log(this.medals);

}

var johnAthleteES5 = new AthleteES5("John", 1989, "Swimmer", 3, 10);

johnAthleteES5.calculateAge();
johnAthleteES5.wonMedal();
johnAthleteES5.wonMedal();
johnAthleteES5.wonMedal();

var john5 = new PersonES5("John", 1990, "Teacher");




// ES6

// classes are not hoisted, so they must be introduced before being used.
// you can only add methods to classes, not properties --
// inheriting properties to obj instances is NOT good practice anyway!
class Person {

	constructor(name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	} 

	calculateAge() {

		var age = new Date().getFullYear - this.yearOfBirth;

		console.log(age);

	} 

} 


// this is so much easier. extend me bb
class Athlete extends Person {

	constructor(name, yearOfBirth, job, olympicGames, medals) {
		// super() calls super class, ie parent class
		super(name, yearOfBirth, job);
	}

}



















