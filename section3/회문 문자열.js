function solution(str) {
	return str.toUpperCase() === str.toUpperCase().split('').reverse().join('')
		? 'YES'
		: 'FALSE'
}
