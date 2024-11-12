function solution(s) {
	let answer = ''
	const strSplit = s.split(' ')
	console.log(strSplit)
	strSplit.map((el, idx) => {
		el === ''
			? (answer += ' ')
			: (answer +=
					el[0].toUpperCase() + el.slice(1, el.length).toLowerCase() + ' ')
	})
	return answer.slice(0, answer.length - 1)
}
console.log(solution('  for the what  1what'))
