function solution(a, b, c) {
	const arrLength = [...new Set([a, b, c])].length
	if (arrLength === 1)
		return (
			(a + b + c) *
			(a * a + b * b + c * c) *
			(a * a * a + b * b * b + c * c * c)
		)
	if (arrLength === 2) return (a + b + c) * (a * a + b * b + c * c)
	if (arrLength === 3) return a + b + c
}
