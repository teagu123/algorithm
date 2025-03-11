function solution(routes) {
	let prevCamera = -30001
	let answer = 0

	routes.sort((a, b) => a[1] - b[1])

	for (let [a, b] of routes) {
		if (prevCamera < a) {
			answer++
			prevCamera = b
		}
	}

	return answer
}
