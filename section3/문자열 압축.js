function solution(str) {
	let cnt = 1
	let answer = ''
	for (let i = 0; i < str.length; i++) {
		console.log(str[i])
		if (str[i] !== str[i + 1]) {
			cnt === 1 ? (answer += str[i]) : (answer += str[i] + cnt)
			cnt = 1
		} else {
			cnt++
		}
	}

	return answer
}
