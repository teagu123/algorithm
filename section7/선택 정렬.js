function solution(arr) {
	//앞에 idx하나 잡아서 그것부터 뒤에서 가장 작은 값 하는거
	for (let i = 0; i < arr.length; i++) {
		let min = arr[i]

		for (let j = i + 1; j < arr.length; j++) {
			if (min > arr[j]) {
				min = arr[j]
				const copy = arr[i]
				arr[i] = min
				arr[j] = copy
			}
		}
	}
	return arr
}
