function solution(names) {
	/**
	 * 처음에는 forEach를 사용해서 모든것을 반복하려고 진행을 하였는데,
	 * for문을 통해 5씩 건너가면 된다.
	 */
	let firstNames = []
	for (let i = 0; i < names.length; i += 5) {
		firstNames.push(names[i])
	}
	return firstNames
}
