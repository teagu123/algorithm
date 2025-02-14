function isPrime(num) {
	if (num <= 1) return false
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return false
	}
	return true
}

function solution(numbers) {
	let checkList = Array.from({ length: numbers.length }, () => 0)
	let answer = []

	const DFS = str => {
		if (str !== '' && isPrime(Number(str))) answer.push(Number(str))

		for (let i = 0; i < numbers.length; i++) {
			if (checkList[i] === 0) {
				checkList[i] = 1
				DFS(str + numbers[i])
				checkList[i] = 0
			}
		}
	}

	DFS('')

	return new Set(answer).size
}
