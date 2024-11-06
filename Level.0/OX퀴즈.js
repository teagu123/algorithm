function solution(quiz) {
	let answer = []
	quiz.map(el => {
		const [num1, cal, num2, , result] = el.split(' ')
		console.log(num1, cal, num2, result)
		if (cal === '+') {
			Number(num1) + Number(num2) === Number(result)
				? answer.push('O')
				: answer.push('X')
		}
		if (cal === '-') {
			Number(num1) - Number(num2) === Number(result)
				? answer.push('O')
				: answer.push('X')
		}
	})

	return answer
}
console.log(solution(['3 - 4 = -3', '5 + 6 = 11']))
