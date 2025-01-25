function solution(num, arr1, arr2) {
	// n은
	let answer = 0
	const DFS = (n, sum, time) => {
		if (n === arr1.length) {
			if (time > num) return
			else {
				if (answer < sum) {
					answer = sum
				}
			}
		} else {
			DFS(n + 1, sum + arr1[n], time + arr2[n])
			DFS(n + 1, sum, time)
		}
	}

	DFS(0, 0, 0)

	return answer
}
console.log(solution(20, [10, 25, 15, 6, 7], [5, 12, 8, 3, 4]))
