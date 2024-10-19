function solution(num_list, n) {
	let resultArr = []
	for (let i = 0; i < num_list.length; i += n) {
		resultArr.push(num_list[i])
	}
	return resultArr
}
