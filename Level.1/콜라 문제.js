function solution(a, b, n) {
	let result = 0

	const order = bottle => {
		const count = Math.floor(bottle / a) * b
		result += count
		n = (bottle % a) + count
	}

	while (n >= a) {
		order(n)
	}
	return result
}
console.log(solution(2, 1, 20))
