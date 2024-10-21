function solution(order) {
	const machine = menu => {
		let price = 0
		if (menu.includes('americano') || menu === 'anything') {
			price = 4500
		}
		if (menu.includes('latte')) {
			price = 5000
		}
		return price
	}
	let answer = 0
	order.forEach(el => {
		answer += machine(el)
	})
	return answer
}
