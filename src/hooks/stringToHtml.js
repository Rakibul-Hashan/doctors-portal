const stringToHtml = function (str) {
	var dom = document.createElement('div');
	dom.innerHTML = str;
	return dom;
};

export default stringToHtml;