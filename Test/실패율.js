function solution(N, stages) {
	// 1부터 N까지 있음
	// 1부터 제거하면서 해야함

	let object = {}
	for (let i = 1; i <= N; i++) {
		const length = stages.filter(el => el === i).length
		const length1 = stages.filter(el => el >= i).length
		object[i] = length / length1
	}
	const total = Object.entries(object).sort((a, b) => b[1] - a[1])

	const answer = []
	total.forEach(el => answer.push(Number(el[0])))
	return answer
}
