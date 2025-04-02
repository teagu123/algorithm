function solution(str, point) {
	let answer = []

	let cnt = 1000
	for (let i = 0; i < str.length; i++) {
		if (str[i] === point) {
			cnt = 0
			answer.push(cnt)
		} else {
			cnt++
			answer.push(cnt)
		}
	}

	let cnt2 = 1000

	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] === point) {
			cnt2 = 0
		} else {
			cnt2++
			if (answer[i] > cnt2) {
				answer[i] = cnt2
			}
		}
	}

	return answer
}

//새로 한거
function solution(str, s) {
	const L = str.length
	let answer = []
	for (let i = 0; i < L; i++) {
		console.log('i', i)
		let min = 101

		if (str[i] === s) {
			answer.push(0)
			continue
		}

		for (let pr = i; pr >= 0; pr--) {
			if (str[pr] === s) {
				min = Math.min(min, i - pr)
				console.log('min1', min)

				break
			}
		}
		for (let nx = i; nx < L; nx++) {
			if (str[nx] === s) {
				min = Math.min(min, nx - i)
				break
			}
		}

		answer.push(min)
		console.log(answer)
	}

	return answer
}
console.log(solution('teachermode', 'e'))
