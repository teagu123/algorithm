function solution(my_string, m, c) {
	let count = 0
	let arr = ''
	for (let i = 0; i <= my_string.length; i += m) {
		const sliceStr = my_string.slice(i, (count += m))

		if (sliceStr) {
			arr += sliceStr[c - 1]
		}
	}
	return arr
}
