function solution(num_list) {
	// 방법1. 아래와 같이 하면 0.02ms
	// return num_list.reverse()
	// 방법2.
	let numLength = num_list.length - 1
	let arr = []
	for (let i = numLength; i < 0; i--) {
		arr.push(num_list[i])
	}
	console.log(arr)
}
