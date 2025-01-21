function solution(arr) {
	const arr1 = arr[0]
	let answer = 0
	for (let i = 0; i < arr1.length - 1; i++) {
		for (let j = i + 1; j < arr1.length; j++) {
			const target = [arr1[i], arr1[j]] //멘토링을 할수있는 리스트 전부
			let cnt = 1

			for (let k = 1; k < arr.length; k++) {
				let first = 0
				let second = 0

				for (let m = 0; m < arr1.length; m++) {
					if (target[0] === arr[k][m]) {
						first = m
						continue
					}
					if (target[1] === arr[k][m]) {
						second = m
						continue
					}
					if (first !== 0 && second !== 0) {
						break
					}
				}

				if (first < second) {
					cnt++
				}
			}

			if (cnt === arr.length) {
				answer++
			}
		}
	}

	return answer
}
