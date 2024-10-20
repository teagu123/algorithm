function solution(n, control) {
	const col = str => {
		let answer = 0
		switch (str) {
			case 'w':
				answer = +1
				break
			case 's':
				answer = -1
				break
			case 'd':
				answer = +10
				break
			case 'a':
				answer = -10
				break
		}
		return answer
	}

	for (let el of control) {
		n += col(el)
	}

	return n
}
