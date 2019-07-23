import GetElements from "../helpers/get-elements";
import SortElements from "../helpers/sort-elements";
import BindEvents from "../helpers/bind-events";

function HeaderMenu() {
	const Button = new GetElements(false, ".toggle-button");
	const Menu = new GetElements(false, ".menu");

	BindEvents("click", Button, () => {
		Button.classList.toggle("is-active");
		Menu.classList.toggle("is-active");
	});
}

export default HeaderMenu;
