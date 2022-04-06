import BaseBallGame from "./BaseBallGame.js"
import {MSG_ERROR} from "./constants.js"

export default class App {
	constructor() {
		this.$form = document.getElementById('input-form');
		this.$input = document.getElementById('user-input');
		this.$button = document.getElementById('submit');
		this.$result = document.getElementById('result');
		this.$restart = document.getElementById('game-restart-button');
		this.baseBallGame = new BaseBallGame();
		this.addSubmitEvent();
		this.addRestartEvent();
		this.init();
	}

	init() {
		this.$restart.style.display = "none";
		this.$result.innerText = '';
		this.baseBallGame.start();
	}

	addSubmitEvent() {
		this.$form.addEventListener('submit', (e) => {
			e.preventDefault();
			const inputValue = this.$input.value;
			const response = this.baseBallGame.takeUserNumber(inputValue);
			this.$result.innerText = response.message;
			this.$input.value='';
			if (response.result === "error") alert(MSG_ERROR);
			else if (response.result === "success") {
				this.$result.innerText += "\n게임을 새로 시작하시겠습니까?";
				this.$restart.style.display = "inline-block";
			}
		})
	}

	addRestartEvent() {
		this.$restart.addEventListener('click', ()=>this.init());
	}
}