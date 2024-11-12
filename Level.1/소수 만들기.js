function solution(nums) {
	let count = 0
	const isPrime = number => {
		if (number < 2) return // 자연수가 아닌 경우

		for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
			if (number % i === 0) {
				return
			}
		}

		return count++
	}

	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				isPrime(nums[i] + nums[j] + nums[k])
			}
		}
	}
	return count
}
console.log(solution([1, 2, 3, 4]))
