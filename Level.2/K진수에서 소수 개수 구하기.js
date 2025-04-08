function solution(n, k) {
	function isPrime(num) {
		if (num < 2) return false

		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) return false
		}
		return true
	}

	const target = n.toString(k)

	const arr = target.split(0)

	let count = 0

	for (let i of arr) {
		if (isPrime(i)) count++
	}

	return count
}
