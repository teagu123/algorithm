function solution(a, b) {
	const arr = [...new Array(a)].map((el, idx) => idx + 1)

	for (let i = 0; i < a - 1; i++) {
		arr.push(...arr.splice(0, b - 1))
		arr.shift()
	}
	return arr[0]
}

function solution(n, k) {
	const mapArr = Array.from({ length: n }, () => 0).map((e, idx) => idx + 1)

	let count = 1
	while (mapArr.length !== 1) {
		if (count === 3) {
			mapArr.shift()
			count = 1
			continue
		}

		count++
		const fir = mapArr.shift()
		mapArr.push(fir)
	}

	return mapArr
}
