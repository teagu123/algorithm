function solution(num_list) {
	return num_list.length <= 10
		? num_list.reduce((acc, crr) => acc * crr)
		: num_list.reduce((acc, crr) => acc + crr, 0)
}
console.log(solution([2, 3, 4, 5]))
