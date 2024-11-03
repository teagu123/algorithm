function solution(my_string) {
	const str = my_string.split(' ')
	let count = 0
	if (str[1] === '+') {
		count = Number(str[0]) + Number(str[2])
	}
	if (str[1] === '-') {
		count = Number(str[0]) - Number(str[2])
	}

	for (let i = 3; i < str.length; i += 2) {
		if (str[i] === '+') {
			count += Number(str[i + 1])
		}
		if (str[i] === '-') {
			count -= Number(str[i + 1])
		}
	}

	return count
}
