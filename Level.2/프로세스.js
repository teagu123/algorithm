function solution(priorities, location) {
	const list = priorities.map((el, idx) => [idx, el])
	let answer = 0

	while (list.length) {
		const target = list.shift()

		const findIdx = list.findIndex(el => el[1] > target[1])

		if (findIdx === -1) {
			if (target[0] === location) return (answer += 1)
			answer++
		} else {
			list.push(target)
		}
	}
}
