function solution(n, m) {
	const min = Math.min(n, m)
	const max = Math.max(n, m)
	let count = 1

	const answer = [1, 1]

	for (let i = 2; i <= m; i++) {
		if (min % i === 0 && max % i === 0) {
			answer[0] = i
		}
	}
	while (true) {
		if ((max * count) % min === 0) {
			answer[1] = max * count
			break
		}
		count++
	}
	return answer
}
