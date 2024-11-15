function solution(s) {
	if (s.length % 2 === 1) return 0
	const answer = []
	let count = 0
	for (let i = 0; i < s.length; i++) {
		if (i !== 0) {
			s = s.substring(1, s.length) + s[0]
		}

		let isError = false

		for (let str of s) {
			if ('(' === str || '[' === str || '{' === str) {
				answer.push(str)
			} else {
				const opening = answer.pop()
				if (opening === '(' && str === ')') continue
				if (opening === '{' && str === '}') continue
				if (opening === '[' && str === ']') continue

				isError = true
				break
			}
		}
		if (!isError) {
			count++
		}
	}
	return count
}
