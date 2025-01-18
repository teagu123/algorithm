function solution(string, query) {
	const result = []
	for (let el of query) {
		let isTrue = false
		for (let i = 0; i < string.length; i++) {
			if (el == string[i]) {
				result.push(true)
				isTrue = true
				break
			}
		}
		if (!isTrue) {
			result.push(false)
		}
	}
	return result
}

console.log(
	solution(['apple', 'banana', 'cherry'], ['banana', 'kiwi', 'melon', 'apple']),
)
