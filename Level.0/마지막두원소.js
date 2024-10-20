function solution(num_list) {
	const numListLastIdx = num_list.length - 1
	if (num_list[numListLastIdx] > num_list[numListLastIdx - 1]) {
		num_list.push(num_list[numListLastIdx] - num_list[numListLastIdx - 1])
	} else {
		num_list.push(num_list[numListLastIdx] * 2)
	}
	return num_list
}
