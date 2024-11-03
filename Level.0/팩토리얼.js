function solution(n) {
	let count = 1
	if (n === 0 || n === 1) return n
	for (let i = 2; i <= n; i++) {
		count = count * i
		if (count === n) return i
		if (count > n) return i - 1
	}
}
