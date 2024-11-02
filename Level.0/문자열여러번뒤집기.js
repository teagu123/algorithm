function solution(my_string, queries) {
	let str = my_string
	for (let [a, b] of queries) {
		str =
			str.slice(0, a) +
			str
				.slice(a, b + 1)
				.split('')
				.reverse()
				.join('') +
			str.slice(b + 1, my_string.length)
	}
	return str
}
console.log(
	solution('rermgorpsam', [
		[2, 3],
		[0, 7],
		[5, 9],
		[6, 10],
	]),
)
