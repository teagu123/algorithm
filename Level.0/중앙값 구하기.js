function solution(array) {
	let pointIdx = Math.floor(array.length / 2)
	array.sort((a, b) => a - b)
	return array[pointIdx]
}
