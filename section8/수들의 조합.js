function solution(k, arr, m) {
	// k는 뽑아야하는 숫자 개수
	// arr은 숫자 list
	// m은 m의 배수

	let answer = 0
	let tmp = Array.from({ length: k })

	const DFS = (L, s, sum) => {
		if (L === k) {
			if (sum % m === 0) {
				console.log(sum, tmp)
			}
		} else {
			for (let i = s; i < arr.length; i++) {
				tmp[L] = arr[i]
				DFS(L + 1, i + 1, sum + arr[i])
			}
		}
	}

	DFS(0, 0, 0)
}
console.log(solution(3, [2, 4, 5, 8, 12], 6))
