function solution(angle) {
	if (angle > 0 && angle < 90) return 1
	if (angle === 90) return 2
	if (angle > 90 && angle < 180) return 3
	if (angle === 180) return 4
}

// function solution(angle) {
//     return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
// }

//삼항연산자가 좀더빠름
