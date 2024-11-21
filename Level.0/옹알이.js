function solution(babbling) {
	const test = ['aya', 'ye', 'woo', 'ma']
	let answer = []
	let count = 0

	babbling.map(el =>
		test.map(testEl => {
			if (el.includes(testEl)) {
				answer.push(el.split(testEl))
			}
		}),
	)

	console.log(answer)
	answer.map(([first, second]) => {
		const isFirst = test.some(el => el === first)
		const isSecond = test.some(el => el === second)
		if (
			(first === '' || test.some(el => el === first)) &&
			(second === '' || test.some(el => el === second))
		) {
			console.log(first, second)

			count++
		}
	})

	return count
}
console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa']))
