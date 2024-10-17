function solution(a, b) {
	const plus = Number(String(a) + b)
	return plus > a * b * 2 ? plus : a * b * 2
}
