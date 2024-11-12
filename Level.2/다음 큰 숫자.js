function solution(n) {
	if (n === 2) return 2
	const fibonacci = [0, 1]
	for (let i = 2; i < n; i++) {
		// 2
		fibonacci.push(fibonacci[i - 2] + fibonacci[i + 1])
	}

	return fibonacci
}
console.log(solution(5))
