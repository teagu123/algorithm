function solution(str, point) {
	let answer = []

	let cnt = 1000
	for (let i = 0; i < str.length; i++) {
		if (str[i] === point) {
			cnt = 0
			answer.push(cnt)
		} else {
			cnt++
			answer.push(cnt)
		}
	}

	let cnt2 = 1000

	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] === point) {
			cnt2 = 0
		} else {
			cnt2++
			if (answer[i] > cnt2) {
				answer[i] = cnt2
			}
		}
	}

	return answer
}
