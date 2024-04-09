function solution(numbers) {
	let total = numbers.reduce((a, b) => a + b)

	return (total / numbers.length).toFixed(1)
}
// 위와같이 내장함수 reduce를 사용하면 0.04ms

// function solution(numbers) {
//     let total =0
//     for(each of numbers){
//         total += each
//     }

//     return  (total / numbers.length).toFixed(1);
// }
//이거는 최대 0.22ms까지 나옴
