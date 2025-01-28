function solution(arr) {
	let clothes = {}
	let answer = 1

	for (let [fir, sec] of arr) {
		clothes[sec] ? clothes[sec]++ : (clothes[sec] = 1)
	}

	for (const key in clothes) {
		answer *= clothes[key] + 1
	}

	return answer - 1
}
console.log(
	solution([
		['yellow_hat', 'headgear'],
		['blue_sunglasses', 'eyewear'],
		['green_turban', 'headgear'],
	]),
)
