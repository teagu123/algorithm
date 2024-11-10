function solution(number, limit, power) {
	if (number === 1) return 1
	let answer = [1]

	const getDivisor = num => {
		let count = 0
		for (let i = 1; i <= Math.sqrt(num); i++) {
			if (num % i === 0) {
				count++
				if (i !== num / i) {
					count++
				}
			}
		}
		return count
	}

	for (let i = 2; i <= number; i++) {
		const divisor = getDivisor(i)
		divisor > limit ? answer.push(power) : answer.push(divisor)
	}

	return answer.reduce((a, b) => a + b)
}
console.log(solution(10, 3, 2))

// 2 3 4 5
