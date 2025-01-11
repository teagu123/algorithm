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

//다시 풀었을때 효율 상승
function solution(n, arr) {
	let arrLength = arr.length

	let answer = {}
	for (let stage = 1; stage <= n; stage++) {
		let count = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === stage) {
				count++
			}
		}

		answer[stage] = count / arrLength

		arrLength -= count
	}

	const sortArr = Object.entries(answer).sort(
		([, value], [, value1]) => value1 - value,
	)
	return sortArr.map(el => Number(el[0]))
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))
