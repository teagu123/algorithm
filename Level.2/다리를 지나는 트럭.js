function solution(bridge_length, weight, truck_weights) {
	let bridgeList = Array.from({ length: bridge_length }, () => 0)
	let count = 0

	while (bridgeList.length) {
		bridgeList.shift()
		count++
		if (truck_weights.length) {
			const sum = bridgeList.reduce((a, b) => a + b)
			if (sum + truck_weights[0] <= weight) {
				const truck = truck_weights.shift()
				bridgeList.push(truck)
			} else {
				bridgeList.push(0)
			}
		}
	}

	return count
}
