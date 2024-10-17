function solution(arr, k) {
	arr.forEach((el, i) => {
		if (k % 2 === 0) {
			arr[i] = el + k
		} else {
			arr[i] = el * k
		}
	})
	return arr
}
