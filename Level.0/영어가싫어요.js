const isEnglish = str => {
	switch (str) {
		case 'one':
			return 1
		case 'two':
			return 2
		case 'three':
			return 3
		case 'four':
			return 4
		case 'five':
			return 5
		case 'six':
			return 6
		case 'seven':
			return 7
		case 'eight':
			return 8
		case 'nine':
			return 9
		case 'zero':
			return 0
	}
}

function solution(numbers) {
	const splitNumbers = numbers.split('')

	let plusStr = ''
	let answer = ''
	splitNumbers.forEach(el => {
		plusStr += el
		const result = isEnglish(plusStr)
		if (result || result === 0) {
			plusStr = ''
			answer += result
		}
	})
	return Number(answer)
}
