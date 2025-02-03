function solution(numbers, target) {
	let answer = 0

	const DFS = (level, sum) => {
		// level은 트리 단계, sum은 다 더한거

		if (level === numbers.length) {
			if (sum === target) {
				answer++
			}
		} else {
			DFS(level + 1, sum + numbers[level])
			DFS(level + 1, sum - numbers[level])
		}
	}

	DFS(0, 0)

	return answer
}

console.log(solution([4, 1, 2, 1], 4))
