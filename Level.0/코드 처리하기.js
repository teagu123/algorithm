function solution(code) {
	/**
	 * mode === 0
	 * code[i] !== 1 && i %2===0 => ret += code[idx]
	 * code[i] === 1 => mode를 0 -> 1
	 *
	 * mode === 1
	 * code[i] !== 1 && i %2===1 => ret += code[idx]
	 * code[i] === 1 => mode를 1 -> 0
	 */
	let mode = 0
	let ret = ''
	for (let i = 0; i < code.length; i++) {
		if (mode === 0 && code[i] !== '1' && i % 2 === 0) {
			ret += code[i]
			continue
		}
		if (mode === 0 && code[i] === '1') {
			mode = 1
			continue
		}
		if (mode === 1 && code[i] !== '1' && i % 2 === 1) {
			ret += code[i]
			continue
		}
		if (mode === 1 && code[i] === '1') {
			mode = 0
			continue
		}
	}
	return ret.length === 0 ? 'EMPTY' : ret
}
console.log(solution('abc1abc1abc'))
