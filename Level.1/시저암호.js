function solution(s, n) {
	// 전부 아스키 코드로 변경하고 + 하면 될거같다.
	let answer = []
	let str = ''

	const charCode = (acsill, n) => {
		if (acsill === 32) {
			answer.push(' ')
			return
		}
		if (acsill <= 90 && acsill + n > 90) {
			const total = acsill + n - 26
			answer.push(total)
			return
		}
		if (acsill >= 97 && acsill + n > 122) {
			const total = acsill + n - 26
			answer.push(total)
			return
		}
		answer.push(acsill + n)
	}

	s.split('').map(el => charCode(el.charCodeAt(), n))

	answer.map(el => (str += el === ' ' ? ' ' : String.fromCharCode(el)))
	return str
}
console.log(solution('a B z', 4))
