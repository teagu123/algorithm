function solution(arr) {
	let count = 1
	let total = 0

	for (let i of arr) {
		if (i === 1) {
			total += count
			count++
		} else {
			count = 1
		}
	}

	return total
}
