function solution(phone_book) {
	phone_book.sort()

	for (let i = 0; i < phone_book.length - 1; i++) {
		if (
			phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)
		) {
			return false
		}
	}

	return true
}
console.log(
	solution(['11', '22', '33', '44', '123', '345', '12345', '4567', '34566']),
)
