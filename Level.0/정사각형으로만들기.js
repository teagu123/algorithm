function solution(arr) {
	let hang = arr.length
	let yel = arr[0].length

	if (hang === yel) return arr
	if (hang > yel) {
		arr.forEach((el, idx) => {
			for (let i = 0; i < hang - yel; i++) {
				arr[idx].push(0)
			}
		})
		return arr
	}
	if (yel > hang) {
		for (let i = hang; i < yel; i++) {
			arr.push([])
			for (let j = 0; j < yel; j++) {
				arr[i].push(0)
			}
		}
		return arr
	}
}
