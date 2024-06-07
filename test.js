function isPrime(num) {
	let count = 0
	for (let a = 2; a < num; a++) {
		if (num % a === 0) {
			count++
		}
	}
	return count === 0 ? true : false
}

function test(arr) {
	let answer = []

	for (let a of arr) {
		let total = 0
		while (a) {
			let t = a % 10
			total = total * 10 + t
			a = parseInt(a / 10)
		}
		if (isPrime(a) === true) {
			answer.push(a)
		}
	}
	console.log(answer)
}
let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100]

console.log(test(arr))
