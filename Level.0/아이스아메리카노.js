function solution(money) {
	let cnt = Math.floor(money / 5500)
	let remain = money % 5500
	return [cnt, remain]
}
