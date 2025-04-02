function solution(str) {
	let num = ''
	for (let i of str) {
		if (Number(i) || i === '0') {
			num += i
		}
	}
	return Number(num)
}
