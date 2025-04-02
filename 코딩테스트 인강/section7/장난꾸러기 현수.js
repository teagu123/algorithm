function solution(arr) {
	const answer = [0, 0]
	console.log(arr)

	let start = arr[0]
	for (let i = 1; i < arr.length; i++) {
		if (start >= arr[i]) {
			answer[0] = i
			break
		} else {
			start = arr[i]
		}
	}

	let end = arr[arr.length - 1]
	for (let i = arr.length - 2; i >= 0; i--) {
		if (end <= arr[i]) {
			answer[1] = i + 2
			break
		} else {
			end = arr[i]
		}
	}

	return answer
}
