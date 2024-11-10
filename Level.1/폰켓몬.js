function solution(nums) {
	// N/2 마리 가져가도 된다 Math.floor() 생각하자.
	//
	const getPoket = Math.floor(nums.length / 2)
	const selectNum = [...new Set(nums)].length
	if (selectNum >= getPoket) return getPoket
	return selectNum
}
console.log(solution([3, 1, 2, 3]))
