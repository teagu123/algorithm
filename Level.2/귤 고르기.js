function solution(k, tangerine) {
	const frequencyMap = new Map()

	// 각 숫자의 빈도를 구함
	for (const size of tangerine) {
		frequencyMap.set(size, (frequencyMap.get(size) || 0) + 1)
	}
	console.log(frequencyMap)

	// 빈도를 배열로 변환하여 내림차순으로 정렬
	const frequencies = Array.from(frequencyMap.values()).sort((a, b) => b - a)

	let count = 0
	let result = 0

	// k개의 귤을 선택하기 위해 필요한 최소한의 귤 크기 종류 수 계산
	for (const freq of frequencies) {
		count += freq
		result++
		if (count >= k) break
	}

	return result
}

console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]))
