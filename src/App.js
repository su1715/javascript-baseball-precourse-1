export default class App {
	constructor() {
		this.$form = document.getElementById('input-form')
		this.$input = document.getElementById('user-input')
		this.$button = document.getElementById('submit')
		this.$result = document.getElementById('result')
		this.init();
	}
	init() {
		this.$form.addEventListener('submit', (e) => {
			e.preventDefault();
			console.log(this.$input.value)
			this.$input.innerText='';
		})
	}

}