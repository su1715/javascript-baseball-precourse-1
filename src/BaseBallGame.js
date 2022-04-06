export default class BaseBallGame {
	constructor() {
		this.start();
	}

	start() {
		this.computerInputNumbers = this.createRandomNumber();
	}

	takeUserNumber(input) {
		if (this.checkUserNumber(input)) {
			const userInputNumbers = input
			const {computerInputNumbers} = this;
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
			const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9)
			if (alreadyChecked[randomNumber]) continue;
			alreadyChecked[randomNumber] = true;
			result += randomNumber;
			count++;
		}
		console.log("result:",result)
		return result
	}

	checkUserNumber(userInput) {
		if (userInput.length !== 3) return false;
		if ([...userInput].some((el)=> isNaN(el))) return false;
		if ([...userInput].some((el)=>parseInt(el) === 0)) return false;
		const alreadyChecked = new Array(10).fill(false);
		for (let i = 0; i < 3; i++) {
			if (alreadyChecked[userInput[i]]) return false;
			alreadyChecked[userInput[i]] = true;
			console.log('replay2')
		}
		return true;
	}

	play () {

	}


}