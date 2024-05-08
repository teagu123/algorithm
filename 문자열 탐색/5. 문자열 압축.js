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
