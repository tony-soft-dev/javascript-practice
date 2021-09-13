const arr = [1, 23, 34, 56, 78, 79, 90, 100, 103, 533];

let start = 0; 
let end = arr.length-1;
const target = 99;

function binarySearch(arr, start, end, target) {
	// if it doesn't exist, make sure to stop
	if (start > end) return false;

	let midIndex = Math.floor((start+end)/2);

	if (arr[midIndex] === target) return true;

	if (arr[midIndex] > target) {
		return binarySearch(arr, start, midIndex-1, target);
	} else {
		return binarySearch(arr, midIndex+1, end, target);
	}

}


console.log(binarySearch(arr, start, end, target))