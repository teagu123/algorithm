function solution(str1, str2) {
	const answer = {}

	for (let i = 0; i < str1.length; i++) {
		let s1 = str1[i]
		let s2 = str2[i]

		if (answer[s1]) {
			answer[s1] += 1
		} else {
			answer[s1] = 1
		}

		if (answer[s2]) {
			answer[s2] -= 1
		} else {
			answer[s2] = -1
		}
	}

	for (let i in answer) {
		if (answer[i]) return 'NO'
	}

	return 'YES'
}
