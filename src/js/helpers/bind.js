function Bind(item, action, handle = "click") {
	item.addEventListener(handle, action);
}

export default Bind;
