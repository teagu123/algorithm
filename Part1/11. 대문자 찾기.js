function solution(answer) {
	let count = 0
	for (let x of answer) {
		// 방법
		// 1. x.toUpperCase() 일반적으로 이 방법을 사용
		// 2. x.charCodeAt()
		// if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90)
		if (x.toUpperCase() === x) {
			count++
		}
	}
	return count
}

console.log(solution('KoreaTiMeGood'))
