function solution(my_string) {
	let result = ''
	const strLength = my_string.length
	for (let i = 0; i < strLength; i++) {
		my_string[i] === my_string[i].toUpperCase()
			? (result += my_string[i].toLowerCase())
			: (result += my_string[i].toUpperCase())
	}
	return result
}
solution('cccCCC')
