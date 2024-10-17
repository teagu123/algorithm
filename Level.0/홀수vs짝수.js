function solution(num_list) {
	let count1 = 0
	let count2 = 0
	for (let i = 0; i < num_list.length; i++) {
		if (i === 0 || i % 2 === 0) {
			count1 += num_list[i]
		}
		if (i % 2 === 1) {
			count2 += num_list[i]
		}
	}
	return count1 >= count2 ? count1 : count2
}
