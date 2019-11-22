export default {
	async checkForScanner(delay = 5) {
		this.delay = delay;
		try {
			this.keyboardShown = false;

			this.watchForKeyboard();
			this.createElement();

			return await this.detectScanner();
		} catch (e) {
			this.destroyElement();
			console.log("Error while checking for scanner: " + e);
			return;
		}
	},
	createElement() {
		let elem = document.createElement("input");
		elem.id = "barcode-detector-input-field";
		elem.style =
			"border:0 !important; padding:0 !important; margin:0 !important; height:0 !important; width:0 !important; opacity:0 !important; position:fixed !important; top:-100% !important; left:-100% !important;";
		document.body.appendChild(elem);
		document.getElementById(elem.id).focus();
	},

	watchForKeyboard() {
		let self = this;
		window.addEventListener("keyboardWillShow", this.setKeyboardShownTrue);
		window.addEventListener("keyboardWillHide", this.setKeyboardShownFalse);
	},

	setKeyboardShownTrue() {
		this.keyboardShown = true;
	},
	setKeyboardShownFalse() {
		this.keyboardShown = false;
	},

	detectScanner() {
		this.destroyElement();
		return !this.keyboardShown;
	},

	destroyElement() {
		try {
			let elem = document.getElementById("barcode-detector-input-field");
			document.body.removeChild(elem);
		} catch (e) {
			console.log(e);
		}
	},

	destroy() {
		window.removeEventListener(
			"keyboardWillShow",
			this.setKeyboardShownTrue
		);
		window.removeEventListener(
			"keyboardWillHide",
			this.setKeyboardShownFalse
		);
	}
};
