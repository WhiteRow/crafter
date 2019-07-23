function GetElements(all, item) {
	let Item;

	if (all == true) {
		Item = document.querySelectorAll(item);
	} else {
		Item = document.querySelector(item);
	}

	if (Item != undefined && Item != null) {
		return Item;
	}
}

export default GetElements;
