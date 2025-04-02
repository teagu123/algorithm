function solution(a, b) {
	// 1은 가위, 2는 바위, 3은 보

	const answer = []
	const caseRock = (A, B) => {
		if (A === B) return 'D'
		if (A === 1) {
			if (B === 2) return 'B'
			if (B === 3) return 'A'
		}
		if (A === 2) {
			if (B === 1) return 'A'
			if (B === 3) return 'B'
		}
		if (A === 3) {
			if (B === 1) return 'B'
			if (B === 2) return 'A'
		}
	}

	for (let i = 0; i < a.length; i++) {
		const A = a[i]
		const B = b[i]

		const result = caseRock(A, B)
		answer.push(result)
	}

	return answer
}
