function solution(emergency) {
	/**
	 * 처음 emergency를 sort 정렬을 시켰다. 그러니 원본이 변경된다.
	 * 그래서 비구조화 할당으로 [...배열] 이렇게 처리를 하여 매개변수로 온 배열은 따로 변경되지 않고, 따로 정렬한 배열만 변경된다.
	 */

	let answer = []
	const sortList = [...emergency].sort((a, b) => b - a)

	emergency.forEach(el => {
		answer.push(sortList.indexOf(el) + 1)
	})

	return answer
}
