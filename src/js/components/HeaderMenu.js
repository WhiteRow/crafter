import Get from "../helpers/get";
import Bind from "../helpers/bind";

function HeaderMenu() {
	const Button = Get(".toggle-button");
	const Menu = Get(".menu");

	Bind(Button, () => {
		Button.classList.toggle("is-active");
		Menu.classList.toggle("is-active");
	});
}

export default HeaderMenu;
