function solution(numbers, target) {
	const L = numbers.length
	let list = Array.from({ length: L }, () => 0)
	let answer = 0

	const dfs = (level, cnt) => {
		if (level === L) {
			if (cnt === target) {
				answer++
			}
		} else {
			list[level] = 1
			dfs(level + 1, cnt + numbers[level])
			list[level] = 0
			dfs(level + 1, cnt - numbers[level])
		}
	}

	dfs(0, 0)

	return answer
}
console.log(solution([1, 1, 1, 1, 1], 3))
