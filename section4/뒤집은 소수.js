function solution(str) {
	const answer = []

	function isPrime(x) {
		if (x <= 1) return false
		for (let i = 2; i <= Math.sqrt(x); i++) {
			if (x % i === 0) return false
		}
		return true
	}

	for (let i of str) {
		let total = ''

		for (let j of String(i)) {
			total = j + total
		}

		if (isPrime(Number(total))) {
			answer.push(Number(total))
		}
	}

	return answer
}
