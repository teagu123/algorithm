function solution(arr) {
	//버블 정렬은 앞뒤를 비교하는것이다.

	const minus = []
	const plus = []

	for (let i of arr) {
		if (i < 0) {
			minus.push(i)
			continue
		}
		if (i > 0) {
			plus.push(i)
			continue
		}
	}

	return [...minus, ...plus]
}
