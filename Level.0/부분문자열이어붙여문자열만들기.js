function solution(my_strings, parts) {
	let answer = ''
	my_strings.map((el, idx) => {
		parts[idx][1] += 1
		answer += el.slice(...parts[idx])
	})

	return answer
}

console.log(
	solution(
		['progressive', 'hamburger', 'hammer', 'ahocorasick'],
		[
			[0, 4],
			[1, 2],
			[3, 5],
			[7, 7],
		],
	),
)
