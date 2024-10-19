function solution(numbers, n) {
	let sumTotal = 0
	for (let i = 0; i < numbers.length; i++) {
		sumTotal += numbers[i]
		if (sumTotal > n) return sumTotal
	}

	return sumTotal
}
