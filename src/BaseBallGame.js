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
			const message = this.play(parseInt(computerInputNumbers), parseInt(userInputNumbers))
			if (message === "정답을 맞추셨습니다") return {result: "success", message};
			return {result: "fail", message};
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

	play (userInputNumbers, computerInputNumbers) {
		const userInputArr = [...userInputNumbers.toString()];
		const computerInputArr = [...computerInputNumbers.toString()];
		let strike = 0;
		let ball = 0;
		userInputArr.forEach((userNum,i) => {
			if (computerInputArr.includes(userNum)) {
				if (i === computerInputArr.indexOf(userNum)) strike++;
				else ball++;
			}
		})

		return this.makeResultMessage(ball, strike);
	}

	makeResultMessage(ball, strike) {
		if (strike === 3) return "정답을 맞추셨습니다";
		if (ball === 0 && strike === 0) return "낫싱";
		if (ball === 0) return `${strike}스트라이크`;
		if (strike === 0) return `${ball}볼`;
		return `${ball}볼 ${strike}스트라이크`;
	}


}