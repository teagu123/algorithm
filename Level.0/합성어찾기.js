function solution(n) {
	const compound = num => {
		let count = 0
		for (let i = 1; i <= num; i++) {
			if (num % i === 0) {
				count++
			}
		}
		return count >= 3 ? true : false
	}
	let total = 0
	for (let i = 1; i <= n; i++) {
		compound(i) && total++
	}
	console.log(total)
	return total
}
