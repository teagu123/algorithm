function solution(arr, limit) {
	let count = 100

	const DFS = (level, sum) => {
		if (sum >= limit) {
			if (sum > limit) return

			count = Math.min(level, count)
		} else {
			for (let i = 0; i < arr.length; i++) {
				DFS(level + 1, sum + arr[i])
			}
		}
	}

	DFS(0, 0)

	return count
}
