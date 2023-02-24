import * as _ from 'lodash';

  function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack', "where"], ' ');

    return element;
  }

  document.body.appendChild(component());