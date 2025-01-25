function solution(arr) {
	let answer = 'NO'
	let total = arr.reduce((a, b) => a + b)

	const DFS = (L, sum) => {
		if (L === arr.length) {
			if (total - sum === sum) {
				answer = 'YES'
			}
		} else {
			DFS(L + 1, sum + arr[L]) //값을 더할때
			DFS(L + 1, sum) //값을 더하지않을때
		}
	}

	DFS(0, 0)

	return answer
}
