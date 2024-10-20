function solution(binomial) {
	const splitBinomial = binomial.split(' ')

	const calculator = (operator, num1, num2) => {
		let answer = 0
		switch (operator) {
			case '+':
				answer = num1 + num2
				break
			case '-':
				answer = num1 - num2
				break
			case '*':
				answer = num1 * num2
				break
		}
		return answer
	}
	return calculator(
		splitBinomial[1],
		Number(splitBinomial[0]),
		Number(splitBinomial[2]),
	)
}
