function solution(arr, k) {
	const setArr = [...new Set(arr)]

	let answer = []
	for (let i = 0; i < k; i++) {
		setArr[i] !== undefined ? answer.push(setArr[i]) : answer.push(-1)
	}
	return answer
}
console.log(solution([0, 1, 1, 1, 1], 4))
