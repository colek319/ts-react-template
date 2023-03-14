import * as _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack', 'where', 'when'], ' ');
  const x = { a: 1 };
  return element;
}

document.body.appendChild(component());
