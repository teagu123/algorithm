function solution(day, arr2) {
	let max = 0
	for (let i = 0; i <= arr2.length - day; i++) {
		let sum = 0
		for (let j = i; j < i + day; j++) {
			sum += arr2[j]
		}
		if (max < sum) max = sum
	}

	return max
}
