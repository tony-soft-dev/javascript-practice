const arr = [
	'Apple',
	'Oranges',
	'Peaches',
	'Cherries',
	'Kiwis',
	'Bananas',
	'Strawberries',
	'Cherries',
	'Blueberries'
]

// console.log(arr.slice(2, 4));
// console.log(arr.splice(2, 4, "Eggs"))
// console.log(arr.reverse())
// console.log(arr.length)
arr.copyWithin(3, 6, arr.length)
// console.log(arr)

arr.sort((a, b) => a[1] > b[1] ? 1 : -1);
// console.log(arr.valueOf())

console.log(arr.every(a => a === 'Cherries'))

const newArr = arr.filter(a => a === 'Cherries')
console.log(newArr)