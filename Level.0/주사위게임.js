function solution(a, b) {
	const isOdd = number => {
		return number % 2 === 1
	}
	if (isOdd(a) && isOdd(b)) return a * a + b * b
	if (isOdd(a) || isOdd(b)) return 2 * (a + b)
	if (!isOdd(a) && !isOdd(b)) return a - b > 0 ? a - b : -(a - b)
}
