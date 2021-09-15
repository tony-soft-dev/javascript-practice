// RECURSIOM

function flatten(arr) {
	return arr.reduce((flat, toFlatten) => {
		return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
	}, [])
}


let multiDimentionalArray = [[1], [2, 3], [4, 5, 6, 7], 8, [9]];

console.log(flatten(multiDimentionalArray));