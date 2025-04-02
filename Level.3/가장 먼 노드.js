function solution(n, edge) {
	const tree = Array.from({ length: n + 1 }, () => [])
	const visit = Array.from({ length: n + 1 }, () => 0)
	const countDistance = Array(n + 1).fill(0)

	for (let [a, b] of edge) {
		tree[a].push(b)
		tree[b].push(a)
	}

	visit[1] = 1
	const queue = [1]

	while (queue.length) {
		const current = queue.shift()

		for (let next of tree[current]) {
			if (visit[next] === 0) {
				visit[next] = 1
				countDistance[next] = countDistance[current] + 1
				queue.push(next)
			}
		}
	}

	const max = Math.max(...countDistance)

	return countDistance.filter(el => el === max).length
}
