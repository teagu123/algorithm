function solution(enroll, referral, seller, amount) {
	const parent = {}
	let countList = {}

	for (let i = 0; i < enroll.length; i++) {
		parent[enroll[i]] = referral[i]
		countList[enroll[i]] = 0
	}

	for (let i = 0; i < seller.length; i++) {
		let money = amount[i] * 100
		let curName = seller[i]

		while (curName !== '-' && money > 0) {
			countList[curName] += money - Math.floor(money / 10)
			curName = parent[curName]

			money = Math.floor(money / 10)
		}
	}

	return enroll.map(el => countList[el])
}
