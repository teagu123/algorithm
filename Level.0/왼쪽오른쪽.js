function solution(str_list) {
	let result
	str_list.some((el, idx) => {
		if (el === 'l') return (result = str_list.slice(0, idx))
		if (el === 'r') return (result = str_list.slice(idx + 1, str_list.length))
	})

	return result ? result : []
}
