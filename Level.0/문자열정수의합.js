function solution(num_str) {
	/**
	 * 이걸 reduce로 쓰려면 split으로 쪼개서 해야한다고 생각을 했는데
	 * [...num_str]를 통해 할수있다.
	 */
	return [...num_str].reduce((acc, crr) => Number(acc) + Number(crr), 0)
}
console.log(solution('123456789'))
