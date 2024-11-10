function solution(k, score) {
	let answer = []
	let result = []
	// 그냥 배열의 길이는 k이다. 높은 수부터 넣고 마지막 즉 answer[k-1] 이게 발표 그거임
	for (let i = 0; i < score.length; i++) {
		//총 7번 반복
		answer.push(score[i])
		answer.sort((a, b) => b - a)
		console.log(answer)

		if (answer.length > k) {
			//k보다 클때 마지막 제거해야함
			answer.pop()
			result.push(answer[k - 1])
			continue
		}
		result.push(answer[answer.length - 1])
	}
	return result
}
console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]))
