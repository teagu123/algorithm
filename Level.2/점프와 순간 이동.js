function solution(n) {
	let count = 1

	while (n !== 1) {
		if (n % 2 === 0) {
			n = n / 2
		}
		if (n === 1) {
			break
			return count
		}
		if (n % 2 === 1) {
			count += 1
			n -= 1
		}
	}
	return count
}
