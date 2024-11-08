function solution(picture, k) {
	if (k === 1) return picture

	let answer = new Array(picture.length * k).fill('')

	for (let i = 0; i < picture.length * k; i++) {
		const target = Math.floor(i / k)

		picture[target].split('').map(el => {
			answer[i] += el.repeat(k)
		})
	}

	return answer
}
console.log(
	solution(
		[
			'.xx...xx.',
			'x..x.x..x',
			'x...x...x',
			'.x.....x.',
			'..x...x..',
			'...x.x...',
			'....x....',
		],
		2,
	),
)
