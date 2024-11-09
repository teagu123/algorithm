function solution(s) {
	// data를 반복하면서 find를 한다. 어쩌피 찾으면 그 인덱스가 그 번호이다.
	const data = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
	]

	data.map((el, idx) => {
		s = s.replaceAll(el, idx)
	})
	return Number(s)
}
