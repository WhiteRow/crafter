import Get from "../helpers/get";
import Bind from "../helpers/bind";

function ToggleVideoWindow() {
	const Button = Get(".watch-video-button");

	Bind(Button, () => {
		console.log("Enjoy watching!");
	});
}

export default ToggleVideoWindow;
