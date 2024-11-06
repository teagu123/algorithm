function solution(arr, flag) {
	let answer = []
	flag.forEach((el, idx) => {
		console.log(el)
		if (el) {
			for (let i = 0; i < arr[idx] * 2; i++) {
				answer.push(arr[idx])
			}
		}
		if (!el) {
			for (let i = 0; i < arr[idx]; i++) {
				answer.pop()
			}
		}
	})
	return answer
}
