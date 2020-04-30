function getPath(node){
	let getPathPart = (node) => {
		let pathPart = node.tagName ? node.tagName.toLowerCase() : "";
		pathPart += node.id ? '#' + node.id : "";
		let cls = (node.className && typeof node.className === "string") ? "[class='" + node.className + "']" : "";
		pathPart += cls;	
		if (node.parentElement && node.parentElement.childElementCount){
			let children = Array.from(node.parentElement.children);
			let index = children.indexOf(node) + 1;
			pathPart += ":nth-child(" + index + ")";
		}
		return pathPart;
	};

	let path = getPathPart(node);

	while(node = node.parentElement) {
		path = getPathPart(node) + " > " + path;
	}
	
	return path;
}

module.exports = getPath;