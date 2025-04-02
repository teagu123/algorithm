function solution(arr) {
	let max = ''

	for (let str of arr) {
		if (str.length > max.length) {
			max = str
		}
	}
	return max
}
