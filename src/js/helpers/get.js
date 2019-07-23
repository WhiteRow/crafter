import Select from "./select";

function Get(receive_item, all_items = false) {
	return new Select(receive_item, all_items);
}

export default Get;
