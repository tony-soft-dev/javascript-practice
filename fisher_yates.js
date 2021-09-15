function shuffle(array) { 
	let currentIndex = array.length 	// => traversing through the array backwards
	let temporaryValue, randomIndex		// =>

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex) 
		currentIndex -= 1;							// => since we started at length and array start at 0, array.length - 1

		temporaryValue = array[currentIndex];		// => store current value of index
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
		
	}

	return array;
}


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffle(array));