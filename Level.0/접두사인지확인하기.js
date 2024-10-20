function solution(my_string, is_prefix) {
	let splitArr = []
	for (let i = 0; i < my_string.length; i++) {
		splitArr.push(my_string.slice(0, i + 1))
	}
	return splitArr.includes(is_prefix) ? 1 : 0
}
