import BaseBallGame from "./BaseBallGame.js"

export default class App {
	constructor() {
		this.$form = document.getElementById('input-form');
		this.$input = document.getElementById('user-input');
		this.$button = document.getElementById('submit');
		this.$result = document.getElementById('result');
		this.$restart = document.getElementById('game-restart-button');
		this.$restart.style.display = "none";
		const baseBallGame = new BaseBallGame();
		
		this.$form.addEventListener('submit', (e) => {
			e.preventDefault();
			const inputValue = this.$input.value;
			const result = baseBallGame.takeUserNumber(inputValue);
			console.log(result);
			if (result.result === "error") alert(result.message);
			else {
				if (result.result === "success") this.$restart.style.display = "inline-block"
				this.$result.innerText = result.message;
			}
			this.$input.value='';
		})

		this.$restart.addEventListener('click', (e) => {
			this.$result.innerText = '';
			this.$restart.style.display = "none";
			baseBallGame.start();
		})
	}
}