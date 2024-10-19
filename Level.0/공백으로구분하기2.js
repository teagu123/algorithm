function solution(my_string) {
	let arr = []
	my_string
		.trim()
		.split(' ')
		.map(el => el.length > 0 && arr.push(el))
	return arr
}
console.log(solution(' i    love  you'))
