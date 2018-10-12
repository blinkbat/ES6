
/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/



// classes

// construct common class
class Element {

	constructor(name, year) {
		this.name = name;
		this.year = year;
	}

	findAge(year) {
		this.age = new Date().getFullYear() - year;
	}

}



class Park extends Element {
	constructor(name, year, area, treeCount) {

		super(name, year);

		this.area = area;
		this.treeCount = treeCount;
	}

	findDensity() {
		this.density = this.treeCount / this.area;
		console.log(this.density);
	}

}



class Street extends Element {
	// shorthand for size here sets default val
	constructor(name, year, length, size = 3) {

		super(name, year);

		this.length = length;
		this.size = size;
	}

	streetClass() {

		const classification = new Map();
	  classification.set(1, 'tiny');
	  classification.set(2, 'small');
	  classification.set(3, 'normal');
	  classification.set(4, 'big');
	  classification.set(5, 'huge');

	  // note how fucking cool this is.
	  this.size = classification.get(this.size);
	  console.log(`${this.name}'s size classification is ${this.size}.`);
	}

}


// objects (well, arrays)

const parks 	= [
	// name, year, area, treeCount
	new Park("Cherrywood", 1965, 900, 250),
	new Park("Vinegrove", 1956, 1200, 600),
	new Park("Dirtpath", 1912, 2400, 1050)	
];

const streets = [
	// name, year, length, classification
	new Street("Lincoln", 1907, 20, 2),
	new Street("Kennedy", 1982, 35, 3),
	new Street("King", 1992, 65, 4),
	new Street("Church", 1900)
];


console.log(parks);
console.log(streets);




// functions

function treeDensity() {
	parks.forEach(park => {
		const treeCount = park.treeCount;
		const area = park.area;
		const name = park.name;
		console.log(`The tree density of ${name} is ${area / treeCount}.`);
	});
}



function findTrees() {
	parks.forEach(park => {
		const treeCount = park.treeCount;
		const name = park.name;

		if (treeCount > 1000) {
			console.log(`The tree count of ${name} is over 1000 (${treeCount}).`);
		}
	});
}



function streetInfo() {

	let totalLength = 0;
	let averageLength = 0;
	const streetCount = streets.length;

	streets.forEach(street => {

		const length = street.length;

		if (length !== undefined) {	
			totalLength += length;
		}

	});

	console.log(`The total length of all streets is ${totalLength}.`);

	averageLength = totalLength / streetCount;

	console.log(`The average length? Why, ${averageLength}. Weird question.`);

}



function streetClasses() {
	streets.forEach(street => {

		street.streetClass();

	});
}



function averageParkAge() {

	let totalAge = 0;
	const parkCount = parks.length;

	console.log(`The amount of parks is ${parkCount}.`);

	parks.forEach(park => {

		const name = park.name;
		const year = park.year;
		// making use of built-in Date() method
		const age = new Date().getFullYear() - year;

		console.log(`${name} park is ${age} years old.`);

		totalAge += age;
		console.log(totalAge);

	});

	let averageAge = totalAge / parkCount;
	console.log(`The average age of all parks is ${averageAge}.`);

}















