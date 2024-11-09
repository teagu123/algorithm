function solution(t, p) {
	let answer = []
	for (let i = 0; i <= t.length - p.length; i++) {
		// 7 - 3 => 4

		answer.push(Number(t.slice(i, i + p.length)))
	}
	console.log(answer)
	return answer.filter(el => el <= Number(p)).length
}
console.log(solution('500220839878', '7'))
