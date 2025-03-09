function solution(number, k) {
	const list = Array.from({ length: number.length }, () => 0)

	let max = 0

	const dfs = (level, count) => {
		let str = ''
		if (level > number.length) return
		if (count === number.length - k) {
			list.map((el, idx) => (el === 1 ? (str += number[idx]) : ''))

			max = Math.max(max, Number(str))
		} else {
			list[level] = 1
			dfs(level + 1, count + 1)
			list[level] = 0
			dfs(level + 1, count)
		}
	}

	dfs(0, 0)

	return String(max)
}

//처음은 dfs로 시작했음

function solution(number, k) {
	let stack = []

	for (let i = 0; i < number.length; i++) {
		const el = number[i]

		while (k > 0 && stack[stack.length - 1] < el) {
			stack.pop()
			k--
		}

		stack.push(el)
	}

	stack.splice(stack.length - k, k)

	return stack.join('')
}
