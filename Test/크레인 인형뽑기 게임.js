function solution(table, move) {
	const result = []
	const length = table[0].length
	let count = 0
	for (let j = 0; j < move.length; j++) {
		for (let i = 0; i < length; i++) {
			if (table[i][move[j] - 1] !== 0) {
				if (result.length !== 0) {
					if (result[result.length - 1] === table[i][move[j] - 1]) {
						result.pop()
						count += 2
					} else {
						result.push(table[i][move[j] - 1])
					}
				} else {
					result.push(table[i][move[j] - 1])
				}
				table[i][move[j] - 1] = 0
				break
			}
		}
	}

	return count
}

console.log(
	solution(
		[
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 3],
			[0, 2, 5, 0, 1],
			[4, 2, 4, 4, 2],
			[3, 5, 1, 3, 1],
		],
		[1, 5, 3, 5, 1, 2, 1, 4],
	),
)
