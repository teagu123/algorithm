function solution(n, paths, gates, summits) {
	const maps = Array.from({ length: n + 1 }, () => [])
	const pathList = Array(n + 1).fill(10000000)

	//양방향 설정
	for (const [a, b, c] of paths) {
		maps[a].push([b, c])
		maps[b].push([a, c])
	}

	const queue = []
	for (const gate of gates) {
		pathList[gate] = 0
		queue.push([gate, 0])
	}

	// BFS 사용
	while (queue.length) {
		const [node, cost] = queue.shift()

		if (pathList[node] < cost || summits.indexOf(node) !== -1) continue

		for (const [next, weight] of maps[node]) {
			//pathList 다음꺼가 더 크다. 그러면 queue에 다시 삽입 그러면 while문 가능 즉,
			const maxCost = Math.max(cost, weight)
			if (pathList[next] > maxCost) {
				pathList[next] = maxCost
				queue.push([next, maxCost])
			}
		}
	}

	let answer = [0, Infinity]
	summits.sort((a, b) => a - b)

	console.log(pathList)

	for (const summit of summits) {
		if (pathList[summit] < answer[1]) {
			answer = [summit, pathList[summit]]
		}
	}

	return answer
}

solution(
	7,
	[
		[1, 4, 4],
		[1, 6, 1],
		[1, 7, 3],
		[2, 5, 2],
		[3, 7, 4],
		[5, 6, 6],
	],
	[1],
	[2, 3, 4],
)
