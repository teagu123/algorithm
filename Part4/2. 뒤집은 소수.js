function solution(arr) {
	let reverseArr = []
	for (let x of arr) {
		let str = ''
		let cnt = 0

		for (let i = String(x).length - 1; i >= 0; i--) {
			str += String(x)[i]
		}
		let changeNum = Number(str)

		for (let i = 2; i < changeNum; i++) {
			if (changeNum % i === 0) {
				cnt++
			}
		}

		if (cnt === 0 && changeNum !== 1) {
			reverseArr.push(changeNum)
		} else if (changeNum === 2) {
			reverseArr.push(changeNum)
		}
		changeNum = 0
		str = ''
		cnt = 0
	}
	return reverseArr
}
let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100]
console.log(solution(arr))
