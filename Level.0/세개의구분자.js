function solution(myStr) {
	const answer = myStr
		.replace(/(a|b|c)/g, ' ')
		.split(' ')
		.filter(el => el.length !== 0)

	return answer.length !== 0 ? answer : ['EMPTY']
}
