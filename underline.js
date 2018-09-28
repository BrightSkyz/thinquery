function _(query) {
	return new Underline(document.querySelectorAll(query));
}

var Underline = function(elements) {
	this.elements = [].slice.call(elements);
  this.length = this.elements.length;
}

Underline.prototype = {
	elements: [],
	length: 0,

	toArray: function() {
		return [].slice.call(this);
	},
	get: function(number) {
		if (number == null) {
			return [].slice.call(this.elements);
		}
		if (number < 0) {
    	return this[number + this.length];
    } else {
    	return this[number];
    }
	},
  each: function(callback) {
  	for (var i in this.elements) {
    	callback.call({element: this.elements[i]});
    }
  }
};
