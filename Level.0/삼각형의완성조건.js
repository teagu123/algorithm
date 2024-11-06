function solution(sides) {
	const [max, min] = sides.sort((a, b) => b - a)
	const sumMinusMax = max + min - (max + 1)

	return sumMinusMax + max - (max - min)
}
