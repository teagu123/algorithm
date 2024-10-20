function solution(my_string, s, e) {
	const first = my_string.slice(0, s)
	const second = my_string
		.slice(s, e + 1)
		.split('')
		.reverse()
		.join('')
	const third = my_string.slice(e + 1)
	console.log(third)
	return first + second + third
}
console.log(solution('Stanley1yelnatS', 4, 10))
