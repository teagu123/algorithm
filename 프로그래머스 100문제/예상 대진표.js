function solution(n, a, b) {
	let count = 0
	let arr = Array.from({ length: n }).map((_, idx) => idx + 1)
	let answer = []
	let isTrue = false

	while (!isTrue) {
		answer = []

		for (let i = 0; i < arr.length; i += 2) {
			const [fir, sec] = arr.slice(i, i + 2)
			if ((fir === a && sec === b) || (fir === b && sec === a)) {
				isTrue = true
				break
			}
			if (fir === a || sec === a) {
				answer.push(a)
				continue
			}
			if (fir === b || sec === b) {
				answer.push(b)
				continue
			} else {
				answer.push(fir)
				continue
			}
		}

		arr = [...answer]
		count++
	}

	return count
}
