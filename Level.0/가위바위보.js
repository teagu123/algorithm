function solution(rsp) {
	// 가위 2
	// 바위 0
	// 보  5
	const rockscissorspaper = str => {
		if (str === '0') return '5'
		if (str === '2') return '0'
		return '2'
	}

	const rspLength = rsp.length
	let answer = ''

	for (let i = 0; i < rspLength; i++) {
		answer += rockscissorspaper(rsp[i])
	}

	return answer
}
