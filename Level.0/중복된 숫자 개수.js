function solution(array, n) {
	let total = 0
	// for(a of array){
	//     if(a === n) total++
	// }
	for (let i = 0; i < array.length; i++) {
		if (array[i] === n) total++
	}
	//for of를 쓰는게 보기는 더 간결하지만
	//속도가 빠른것은 for문이다.
	return total
}
