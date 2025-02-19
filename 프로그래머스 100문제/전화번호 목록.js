function solution(phone_book) {
	phone_book.sort((a, b) => a - b)

	const L = phone_book.length

	for (let i = 0; i < L - 1; i++) {
		for (let j = i + 1; j < L; j++) {
			if (phone_book[i][0] !== phone_book[j][0]) continue
			if (phone_book[j].slice(0, phone_book[i].length) === phone_book[i])
				return false
		}
	}

	return true
}
