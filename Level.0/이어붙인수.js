function solution(num_list) {
	let odd = ''
	let even = ''
	num_list.forEach(el => {
		if (el % 2 === 0) {
			even += el
		} else {
			odd += el
		}
	})
	return Number(odd) + Number(even)
}
