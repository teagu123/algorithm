function solution(point, arr2) {
	let total = 0,
		lt = 0,
		rt = 0,
		answer = 0

	for (let i = 0; i < arr2.length; i++) {
		if (total === point) {
			answer++
		}

		if (total < point) {
			total += arr2[rt]
			rt++
			continue
		}
		if (total > point) {
			total -= arr2[rt]
			lt++
			continue
		}
	}
	return answer
}
