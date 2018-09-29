const _element = Symbol();
const _elements = Symbol();

function _(query) {
  return new Underline(document.querySelectorAll(query));
}

class Underline {
  constructor(elements) {
    this[_elements] = [];
    for (var i in elements) {
      this[_elements].push(new UnderlineElement(elements[i]));
    }
    this[_elements] = [].slice.call(elements);
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
      callback.call({
        element: this[_elements][i]
      });
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
