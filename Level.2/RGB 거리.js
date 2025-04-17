function solution(n, inputs) {
	const dp = Array.from({ length: n }, () => Array(3).fill(0))
	const red = []
	const green = []
	const blue = []

	// 빨강, 초록, 파랑 배열 설정
	for (const input of inputs) {
		const [r, g, b] = input
		red.push(r)
		green.push(g)
		blue.push(b)
	}

	dp[0] = [red[0], green[0], blue[0]]

	for (let i = 1; i < n; i++) {
		dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + red[i]
		dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + green[i]
		dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + blue[i]
	}
	console.log(dp)

	return console.log(Math.min(...dp[n - 1]))
}

solution(3, [
	[26, 40, 83],
	[49, 60, 57],
	[13, 89, 99],
])
