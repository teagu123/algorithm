function solution(arr) {
	//버블 정렬은 앞뒤를 비교하는것이다.

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				const copy = arr[j + 1]
				arr[j + 1] = arr[j]
				arr[j] = copy
			}
		}
	}
	return arr
}
