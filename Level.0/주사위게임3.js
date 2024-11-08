function solution(a, b, c, d) {
	const arr = [a, b, c, d]
	let dice = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
	let sum = 0
	arr.map(el => {
		dice[el]++
	})

	let one = []
	let two = []
	for (const num in dice) {
		if (dice[num] === 1) {
			one.push(Number(num))
		}
		if (dice[num] === 2) {
			two.push(Number(num))
		}
	}
	for (const num in dice) {
		const value = dice[num]
		if (value === 4) return 1111 * num
		if (value === 3) return (10 * num + one[0]) ** 2
		if (two.length === 2)
			return (
				(two[0] + two[1]) *
				(two[0] - two[1] >= 0 ? two[0] - two[1] : -(two[0] - two[1]))
			)
		if (two.length === 1) return one[0] * one[1]
		if (one.length === 4) return Math.min(...one)
	}

	return dice
}
console.log(solution(2, 5, 2, 6))
