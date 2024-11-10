function solution(answers) {
	const getUser = (data, target) => {
		return target
			.repeat(Math.ceil(data.length / target.length))
			.slice(0, data.length)
	}

	const first = getUser(answers, '12345')
	const second = getUser(answers, '21232425')
	const third = getUser(answers, '3311224455')

	let count = [0, 0, 0]
	answers.map((el, idx) => {
		if (String(el) === first[idx]) {
			count[0]++
		}
		if (String(el) === second[idx]) {
			count[1]++
		}
		if (String(el) === third[idx]) {
			count[2]++
		}
	})

	let result = []

	count.map((el, idx) => {
		if (Math.max(...count) === el) {
			result.push(idx + 1)
		}
	})

	return result
}
console.log(solution([1, 2, 3, 4, 5, 6]))

// 2 3 4 5
