function solution(gram) {
	let count = 0
	while (gram > 3) {
		gram -= 3
		count++
		if (gram % 5 === 0) return count + gram / 5
		if (gram === 3) return 1 + count
		if (gram < 3) return -1
	}
}
