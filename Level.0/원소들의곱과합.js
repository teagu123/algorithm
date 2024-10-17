function solution(num_list) {
	const addList = num_list.reduce((a, b) => a + b)
	return addList * addList > num_list.reduce((a, b) => a * b) ? 1 : 0
}
