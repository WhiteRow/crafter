import "../styles/app.sass";

import "./config/images-import";

import HeaderMenu from "./components/HeaderMenu";
import ToggleVideoWindow from "./components/VideoModal";

(function() {
	function Init() {
		HeaderMenu();
		ToggleVideoWindow();
	}

	Init();
})();
