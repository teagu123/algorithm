function solution(n, m, section) {
	// n은 벽 칸의 개수
	// m은 롤러 길이
	// section은 칠해야하는 인덱스  = section[index] -1
	section.sort((a, b) => a - b)
	let count = 0
	while (true) {
		const range = section[0] - 1 + m
		const filterList = section.filter(e => section[0] <= e && e <= range)
		count++
		section.splice(0, filterList.length)

		if (section.length === 0) break
	}

	return count
}

// 이걸로 풀자
function solution(n, m, sections) {
	var answer = 0
	var painted = 0
	for (let section of sections) {
		if (painted < section) {
			answer++
			painted = section + m - 1
		}
	}
	return answer
}
