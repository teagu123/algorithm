function solution(numbers) {
	let resultArr = []
	for (let i = 0; i < numbers.length; i++) {
		resultArr.push(numbers[i] * 2)
	}
	return resultArr
}

//reduce를 쓰는것보다 for문들 사용하는것이 더 빠르다.
