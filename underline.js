const _element = Symbol();
const _elements = Symbol();
const _length = Symbol();

function _(query) {
	return new Underline(document.querySelectorAll(query));
}

class Underline {  
	constructor(elements) {
		this[_elements] = [].slice.call(elements);
  	this[_length] = this[_elements].length;
	}
  
  toArray() {
		return [].slice.call(this);
	}
  
	get(number) {
		if (number == null) {
			return [].slice.call(this[_elements]);
		}
		if (number < 0) {
    	return this[number + this[_elements]];
    } else {
    	return this[number];
    }
	}
  
  each(callback) {
  	for (var i in this[_elements]) {
    	callback.call({element: new UnderlineElement(this[_elements][i])});
    }
  }
}

class UnderlineElement {
	constructor(element) {
    this[_element] = element;
  }
  
  html(htmlString) {
		if (htmlString == null) {
			return this[_element].innerHTML;
		} else {
    	this[_element].innerHTML = htmlString;
    }
	}
  
  text(textString) {
		if (textString == null) {
			return this[_element].innerText;
		} else {
    	this[_element].innerText = textString;
    }
	}
}
