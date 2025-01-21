function solution(day, arr2) {
	let sum = 0
	let max = 0

	for (let i = 0; i < day; i++) {
		sum += arr2[i]
	}
	max = sum
	for (let i = day; i < arr2.length; i++) {
		sum -= arr2[i - day]
		sum += arr2[i]

		if (sum > max) max = sum
	}

	return max
}
