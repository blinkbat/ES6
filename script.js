

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
















