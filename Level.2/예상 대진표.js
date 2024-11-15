function solution(n, a, b) {
	// n은 참가 인원 N명
	// 그리고 이긴 거에 Math.ceil(n/2) 번 지정
	// a와 b의 싸움 전까지

	// 홀수면 자기보다 1큰 사람과 짝수면 자기보다 1작은 사람과

	let count = 0

	while (true) {
		const indexA = a % 2 === 1 ? a + 1 : a - 1
		const indexB = b % 2 === 1 ? b + 1 : b - 1
		if (indexA === indexB) {
			return count
		}
		count++
		a = Math.ceil(a / 2)
		b = Math.ceil(b / 2)
	}
}

console.log(solution(8, 4, 7))
