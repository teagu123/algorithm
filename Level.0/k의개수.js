function solution(i, j, k) {
	let count = 0
	for (let m = i; m <= j; m++) {
		const filteringLength = String(m)
			.split('')
			.filter(el => el === String(k)).length
		if (filteringLength >= 1) {
			count += filteringLength
		}
	}
	return count
}
solution(1, 13, 1)
