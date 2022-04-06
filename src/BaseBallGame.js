import {MSG_SUCCESS, MSG_ERROR} from './constants.js';

export default class BaseBallGame {
	start() {
		this.computerInputNumbers = this.createRandomNumber();
	}

	takeUserNumber(input) {
		if (!this.checkUserNumber(input)) 
			return {result: "error", message: ''};
		
		const {computerInputNumbers} = this;
		const userInputNumbers = parseInt(input);
		const message = this.play(computerInputNumbers, userInputNumbers);

		if (message === MSG_SUCCESS) return {result: "success", message};
		return {result: "fail", message};
	}	
	
	createRandomNumber() {
		const alreadyChecked = new Array(10).fill(false);
		let count = 0;
		let result = "";
		while (count < 3) {
			const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
			if (alreadyChecked[randomNumber]) continue;
			alreadyChecked[randomNumber] = true;
			result += randomNumber;
			count++;
		}
		return parseInt(result);
	}

	checkUserNumber(userInput) {
		const alreadyChecked = new Array(10).fill(false);
		if (userInput.length !== 3) return false;
		if ([...userInput].some((el)=> (isNaN(el)) || parseInt(el === 0))) return false;
		for (let i = 0; i < 3; i++) {
			if (alreadyChecked[userInput[i]]) return false;
			alreadyChecked[userInput[i]] = true;
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
		if (strike === 3) return MSG_SUCCESS;
		if (ball === 0 && strike === 0) return "낫싱";
		if (ball === 0) return `${strike} 스트라이크`;
		if (strike === 0) return `${ball} 볼`;
		return `${ball}볼 ${strike}스트라이크`;
	}
}