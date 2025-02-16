function solution(arr, m) {
	let nodeArr = Array.from({ length: m + 1 }, () => [])
	let checkList = Array.from({ length: m + 1 }, () => 0)
	let answer = 0

	for (let [a, b] of arr) {
		nodeArr[a].push(b)
	}

	const DFS = level => {
		if (level === 5) {
			answer++
		} else {
			for (let i = 0; i < m; i++) {
				if (checkList[nodeArr[level][i]] === 0) {
					checkList[nodeArr[level][i]] = 1
					DFS(nodeArr[level][i])
					checkList[nodeArr[level][i]] = 0
				}
			}
		}
	}

	checkList[1] = 1
	DFS(1)

	console.log(answer)
}
console.log(
	solution(
		[
			[1, 2],
			[1, 3],
			[1, 4],
			[2, 1],
			[2, 3],
			[2, 5],
			[3, 4],
			[4, 2],
			[4, 5],
		],
		5,
	),
)
