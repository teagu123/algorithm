function solution(food) {
	let str = ''
	for (let i = 1; i <= food.length; i++) {
		if (food[i] >= 2) {
			const count = Math.floor(food[i] / 2)
			str += String(i).repeat(count)
		}
	}
	return str + 0 + str.split('').reverse().join('')
}
console.log(solution([1, 2, 2, 2, 2]))
