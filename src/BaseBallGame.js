export default class BaseBallGame {
	takeUserNumber(input) {
		if (this.checkUserNumber(input)) {
			const userInputNumbers = input
			const computerInputNumbers = this.createRandomNumber()
			console.log(userInputNumbers, computerInputNumbers)
			//const result = this.play(computerInputNumbers, userInputNumbers)
		}
		else return {result: "error", message: "잘못된 입력입니다"}
	}	
	
	createRandomNumber() {
		const alreadyChecked = new Array(10).fill(false)
		let count = 0
		let result = ""
		while (count < 3) {
			const randomNumber = count === 0 ? 
			MissionUtils.Random.pickNumberInRange(1, 9) : 
			MissionUtils.Random.pickNumberInRange(0, 9)
			if (alreadyChecked[randomNumber]) continue
			alreadyChecked[randomNumber] = true
			result += randomNumber
			count++
		}
		return result
	}

	checkUserNumber() {
		return true;
	}

	play () {

	}


}