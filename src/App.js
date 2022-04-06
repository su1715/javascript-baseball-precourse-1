import BaseBallGame from "./BaseBallGame.js"

export default class App {
	constructor() {
		this.$form = document.getElementById('input-form')
		this.$input = document.getElementById('user-input')
		this.$button = document.getElementById('submit')
		this.$result = document.getElementById('result')
		const baseBallGame = new BaseBallGame();
		
		this.$form.addEventListener('submit', (e) => {
			e.preventDefault();
			const inputValue = this.$input.value
			const result = baseBallGame.takeUserNumber(inputValue)
			console.log(result);
			this.$result.innerText = result.message;
			this.$input.value='';
		})
	}
}