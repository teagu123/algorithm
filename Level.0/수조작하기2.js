function solution(numLog) {
	let str = ''
	const calculator = (acc, next) => {
		const minus = next - acc
		if (minus === 1) return 'w'
		if (minus === -1) return 's'
		if (minus === +10) return 'd'
		return 'a'
	}
	for (let i = 0; i < numLog.length - 1; i++) {
		str += calculator(numLog[i], numLog[i + 1])
	}

	return str
}
