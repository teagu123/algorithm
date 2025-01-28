function solution(k, dungeons) {
	let max = 0
	let cnt = new Array(dungeons.length).fill(0)

	const DFS = (level, k) => {
		// if (level === dungeons.length) {
		// 	console.log(level, k)
		// } else {
		for (let i = 0; i < dungeons.length; i++) {
			if (k >= dungeons[i][0] && cnt[i] === 0) {
				cnt[i] = 1
				DFS(level + 1, k - dungeons[i][1])
				cnt[i] = 0
			}
		}

		max = Math.max(level, max)

		// }
	}

	DFS(0, k)

	return max
}
console.log(
	solution(80, [
		[80, 20],
		[50, 40],
		[30, 10],
	]),
)
