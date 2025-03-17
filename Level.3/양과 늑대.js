function solution(info, edges) {
	const tree = Array.from({ length: info.length }, () => [])
	let max = 0

	for (let [a, b] of edges) {
		tree[a].push(b)
	}

	const dfs = (current, nextArr, sheep, wolf) => {
		info[current] === 0 ? sheep++ : wolf++
		if (sheep <= wolf) return
		max = Math.max(sheep, max)

		const possibleArr = [...nextArr, ...tree[current]]
		possibleArr.splice(
			possibleArr.findIndex(e => e === current),
			1,
		)

		for (let next of possibleArr) {
			dfs(next, possibleArr, sheep, wolf)
		}
	}

	dfs(0, [0], 0, 0)

	return max
}
