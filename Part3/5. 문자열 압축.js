function solution(s) {
	let answer = ''
	let cnt = 1
	s = s + ' '
	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] === s[i + 1]) cnt++
		else {
			answer += s[i]
			if (cnt > 1) answer += String(cnt)
			cnt = 1
		}
	}
	return answer
}
console.log(solution('KKHSSSSSSSE'))

//가독성이 아래가 더 좋지않다
function solution(s) {
	let cnt = 1
	let result = ''

	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i + 1]) {
			cnt++
		} else {
			if (cnt === 1) {
				result += s[i]
			} else {
				result += s[i]
				result += String(cnt)
				cnt = 1
			}
		}
	}
	return result
}
console.log(solution('KKHSSSSSSSE'))
