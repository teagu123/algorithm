function solution(input) {
	const list = input
		.split('-')
		.map(el => el.split('+').reduce((x, y) => Number(x) + Number(y), 0))

	let sum = 0

	for (let i = 0; i < list.length; i++) {
		i === 0 ? (sum += list[i]) : (sum -= list[i])
	}

	return sum
}

console.log(solution('55 - 50 + 40'))
