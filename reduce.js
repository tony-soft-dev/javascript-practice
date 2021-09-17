// reducer returns something reasonable to increment values of an 
	// array as reasonably set
	// if there's a string within array, everything gets concatenated
	// if there's only numbers, you can increment with own function
	// if only booleans, they are treated as 1's and 0's

const myReducer = (a, b) => {
	return a + b;
}

// const arr = [4, 4, 3, 2, 4, 6];
// const arr = ['something', 'stringy', 'to', 'add']
// const arr = ['string', 'another', 4, 34, 'hazzah']
// const arr = [1, 'str', 3, 'something'];
// const arr = [true, 'hazzah', 43]
const arr = [false, false, true, true]

console.log(arr.reduce(myReducer));
