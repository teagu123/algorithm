function solution(number) {
	const sumNumber = number
		.split('')
		.reduce((crr, next) => Number(crr) + Number(next), 0)

	return sumNumber % 9
}
