function mergeSort(arr) {
	if (arr.length < 2) return arr;

	const middleIndex = Math.floor((arr.length) / 2);
	const leftArray = arr.slice(0, middleIndex);
	const rightArray = arr.slice(middleIndex, arr.length);

	return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArr, rightArr) {
	let result = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
		if (leftArr[leftIndex] < rightArr[rightIndex]) {
			result.push(leftArr[leftIndex]);
			leftIndex += 1;
		} else {
			result.push(rightArr[rightIndex]);
			rightIndex += 1;
		}
	}

	return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}


let arr = [4, 1, 500, 32, 54, 46, 12, 44, 943];

console.log(mergeSort(arr));