var _element = Symbol();
var _elements = Symbol();

function _(query) {
  return new Underline(document.querySelectorAll(query));
}

class Underline {
  constructor(elements) {
    var newElements = [];
    elements.forEach(function(element){
      newElements.push(new UnderlineElement(element));
    })
    this[_elements] = [].slice.call(newElements);
  }

  toArray() {
    return [].slice.call(this);
  }

  get(number) {
    if (number == null) {
      return this[_elements][0];
    }
    return this[_elements][number]
  }

  each(callback) {
    for (var i in this[_elements]) {
      callback(this.get(i));
    }
  }
  
  html(htmlString) {
    this.each(function(element){
      element.html(htmlString);
    });
  }
  
  text(textString) {
    this.each(function(element){
      element.html(textString);
    });
  }
  
  color(color) {
    this.each(function(element){
      element.color(color);
    })
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
  
  color(color) {
    if (color == null) {
      return this[_element].style.color;
    } else {
      this[_element].style.color = color;
    }
  }
}
