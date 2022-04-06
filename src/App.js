import BaseBallGame from "./BaseBallGame.js"

export default class App {
	constructor() {
		this.$form = document.getElementById('input-form');
		this.$input = document.getElementById('user-input');
		this.$button = document.getElementById('submit');
		this.$result = document.getElementById('result');
		this.$restart = document.getElementById('game-restart-button');
		this.baseBallGame = new BaseBallGame();
		this.init();
		
		this.$form.addEventListener('submit', (e) => {
			e.preventDefault();
			const inputValue = this.$input.value;
			const response = this.baseBallGame.takeUserNumber(inputValue);
			console.log(response);
			if (response.result === "error") alert(response.message);
			else {
				this.$result.innerText = response.message;
				if (response.result === "success") {
					this.$result.innerText += "\n 게임을 새로 시작하시겠습니까?"
					this.$restart.style.display = "inline-block";
				}
			}
			this.$input.value='';
		})

		this.$restart.addEventListener('click', (e) => {
			this.init();
		})
	}

	init() {
		this.$restart.style.display = "none";
		this.$result.innerText = '';
		this.baseBallGame.start();
	}
}