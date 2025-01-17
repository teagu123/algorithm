function solution(totalStr, str) {
	let count = 0
	for (let i of totalStr) {
		if (i === str) {
			count++
		}
	}
	return count
}
