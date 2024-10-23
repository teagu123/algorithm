function solution(arr) {
	/**
	 * 00
	 * 01
	 * 10
	 * 11
	 *
	 * 아래와 같이 for문을 돌리면 0 ~ 2
	 */
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			let first = arr[i][j]
			let second = arr[j][i]
			if (first !== second) return 0
		}
	}
	return 1
}
