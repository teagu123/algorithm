function solution(arr) {
	const answer = [arr[0]]
	for (let i = 1; i < arr.length; i++) {
		if (answer[0] < arr[i]) {
			answer.unshift(arr[i])
		}
	}

	return answer
}
