function solution(arr) {
	const length = arr.length

	const answer = []
	for (let i = 0; i < length; i++) {
		let count = 0
		for (let j = i + 1; j < length; j++) {
			count++
			if (arr[i] > arr[j]) {
				break
			}
		}
		answer.push(count)
	}
	return answer
}
