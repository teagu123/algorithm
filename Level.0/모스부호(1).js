function solution(letter) {
	const morse = {
		'.-': 'a',
		'-...': 'b',
		'-.-.': 'c',
		'-..': 'd',
		'.': 'e',
		'..-.': 'f',
		'--.': 'g',
		'....': 'h',
		'..': 'i',
		'.---': 'j',
		'-.-': 'k',
		'.-..': 'l',
		'--': 'm',
		'-.': 'n',
		'---': 'o',
		'.--.': 'p',
		'--.-': 'q',
		'.-.': 'r',
		'...': 's',
		'-': 't',
		'..-': 'u',
		'...-': 'v',
		'.--': 'w',
		'-..-': 'x',
		'-.--': 'y',
		'--..': 'z',
	}
	let answer = ''
	letter.split(' ').forEach(element => {
		answer += morse[element]
	})
	return answer
}
solution('.... . .-.. .-.. ---')
