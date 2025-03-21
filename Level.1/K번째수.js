function solution(array, commands) {
	let answer = []
	for (let i = 0; i < commands.length; i++) {
		const data = array
			.slice(commands[i][0] - 1, commands[i][1])
			.sort((a, b) => a - b)[commands[i][2] - 1]
		answer.push(data)
	}
	return answer
}
console.log(
	solution(
		[1, 5, 2, 6, 3, 7, 4],
		[
			[2, 5, 3],
			[4, 4, 1],
			[1, 7, 3],
		],
	),
)

function solution(array, commands) {
	const answer = []

	for (let [start, end, num] of commands) {
		const target = array.slice(start - 1, end).sort((a, b) => a - b)[num - 1]
		answer.push(target)
	}

	return answer
}
