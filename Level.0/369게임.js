function solution(order) {
	const splitStr = String(order).split('')
	return splitStr.filter(el => el > 0 && Number(el) % 3 === 0).length
}
