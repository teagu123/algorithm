function solution(str) {
	let count = 0
	for (let i of str) {
		if (i === i.toUpperCase()) {
			count++
		}
	}
	return count
}
