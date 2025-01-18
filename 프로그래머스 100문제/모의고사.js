function solution(answers) {
	const propsLength = answers.length //문제 길이

	let list = [
		[1, 2, 3, 4, 5],
		[2, 1, 2, 3, 2, 4, 2, 5],
		[3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
	]

	//문제와 사용자 정답 맞추기
	for (let i = 0; i < list.length; i++) {
		if (list[i].length < propsLength) {
			const ceil = Math.ceil(propsLength / list[i].length)
			for (let j = 0; j < ceil; j++) {
				list[i] = [...list[i], ...list[i]].slice(0, propsLength)
			}
		} else {
			list[i] = list[i].slice(0, propsLength)
		}
	}

	const total = [0, 0, 0]
	let max = 0
	//정답 맞추기

	for (let i = 0; i < 3; i++) {
		let count = 0
		for (let j = 0; j < propsLength; j++) {
			if (list[i][j] === answers[j]) {
				total[i]++
				count++
			}
		}
		if (count > max) {
			max = count
		}
	}

	const answer = []
	for (let i = 0; i < 3; i++) {
		if (total[i] === max) {
			answer.push(i + 1)
		}
	}
	return answer
}
console.log(solution([1, 3, 2, 4, 2]))
