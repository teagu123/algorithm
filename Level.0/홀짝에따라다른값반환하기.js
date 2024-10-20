function solution(n) {
	let total = 0
	let arr = []

	const isOdd = n % 2 === 1

	for (let i = isOdd ? 1 : 2; i <= n; i += 2) {
		arr.push(i)
	}

	if (isOdd) {
		arr.forEach(el => {
			total += el
		})
	}
	if (!isOdd) {
		arr.forEach(el => {
			total += el * el
		})
	}

	return total
}
