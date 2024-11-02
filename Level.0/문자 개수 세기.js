function solution(my_string) {
	let answer = Array(52).fill(0)

	const changeAscii = str => {
		const prevAscii = str.charCodeAt()
		if (prevAscii >= 65 && prevAscii <= 90) {
			//대문자
			return prevAscii - 65
		}
		if (prevAscii >= 97 && prevAscii <= 122) {
			//소문자
			return prevAscii - 71
		}
	}
	for (let i of my_string) {
		answer[changeAscii(i)]++
	}

	return answer
}
console.log(solution('Programmers'))
