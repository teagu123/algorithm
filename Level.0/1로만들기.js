function solution(num_list) {
	let count = 0
	num_list.forEach(element => {
		let num = element
		console.log('num', num)

		while (num !== 1) {
			if (num % 2 === 0) {
				num = num / 2
				count++
			}
			if (num === 1) break
			if (num % 2 === 1) {
				num = (num - 1) / 2
				count++
			}
		}
	})
	return count
}
