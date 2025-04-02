function solution(n) {
	// 앞으로 전진은 건전지 사용량 +1
	// 순간이동 *2 는 건전지 사용량 제로

	let cnt = 1

	while (n !== 1) {
		if (n % 2 === 1) {
			n--
			cnt++
			continue
		}
		if (n % 2 === 0) {
			n /= 2
			continue
		}
	}

	return cnt
}
