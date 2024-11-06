function solution(id_pw, db) {
	const [userId, userPw] = id_pw
	const filterId_Pw = db.filter(([id, pw], idx) => id === userId)

	if (filterId_Pw.length === 0) return 'fail'
	if (filterId_Pw.length == !0) {
		const db_Pw = filterId_Pw[0][1]
		return db_Pw === userPw ? 'login' : 'wrong pw'
	}
}
console.log(
	solution(
		['programmer01', '15789'],
		[
			['programmer02', '111111'],
			['programmer00', '134'],
			['programmer01', '1145'],
		],
	),
)
