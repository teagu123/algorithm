function solution(chicken) {
	let coupon = Math.floor(chicken / 10) + Math.floor(chicken % 10)
	let total = Math.floor(chicken / 10)

	//42
	while (coupon >= 10) {
		const order = Math.floor(coupon / 10)
		coupon = Math.floor(coupon % 10)
		total += order
		coupon += order
	}

	return total
}
