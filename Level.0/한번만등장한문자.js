function solution(s) {
	const splitStr = s.split('').sort()
	const set = new Set(splitStr)

	let answer = ''
	for (let i = 0; i < [...set].length; i++) {
		splitStr.filter(el => el === [...set][i]).length === 1 &&
			(answer += [...set][i])
	}
	return answer
}
