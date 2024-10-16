function solution(n) {
	let count = 1
	while (true) {
		if ((count * 6) % n === 0) {
			break
		}
		count++
	}
	return count
}
