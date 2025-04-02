function solution(a, arr) {
	let count = 0

	const DFS = (L, sum) => {
		if (L === arr.length) {
			if (sum > a) return
			const max = Math.max(count, sum)
			if (count < max) {
				count = max
			}
			console.log(sum)
		} else {
			DFS(L + 1, sum + arr[L])
			DFS(L + 1, sum)
		}
	}

	DFS(0, 0)

	return count
}
