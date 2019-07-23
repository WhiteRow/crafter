function Select(selected_item, all_items) {
	switch (all_items) {
		case false:
			return document.querySelector(selected_item);
		case true:
			return document.querySelectorAll(selected_item);
	}
}

export default Select;
