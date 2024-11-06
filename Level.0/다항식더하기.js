function solution(polynomial) {
	const strSplit = polynomial.split('+')

	const xList = strSplit.filter(el => el.includes('x'))
	const numList = strSplit.filter(el => !isNaN(Number(el)))

	let x = 0
	let num = 0
	xList.map(el => {
		if (el.trim() === 'x') {
			x += 1
		} else {
			x += Number(el.split('x')[0])
		}
	})
	numList.map(el => (num += Number(el)))
	if (num === 0) return `${x === 1 ? '' : x}x`
	if (x === 0) return `${num}`
	return `${x === 1 ? '' : x}x + ${num}`
}
console.log(solution('x + 5'))
