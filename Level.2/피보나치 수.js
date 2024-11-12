function solution(n) {
	if (n === 2) return 2
	const fibonacci = [0, 1]
	for (let i = 2; i <= n; i++) {
		fibonacci.push((fibonacci[i - 2] % 1234567) + (fibonacci[i - 1] % 1234567))
	}

	return fibonacci[fibonacci.length - 1] % 1234567
}
console.log(solution(100))
