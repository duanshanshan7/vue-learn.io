import _ from 'lodash';

console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV == 'production'){
  console.log('looks like we are in production mode!');
}

function component() {
    var element = document.createElement('div');
    var br = document.createElement('br');
    var btn = document.createElement('button');

    // Lodash，现在由此脚本导入
    element.innerHTML = _.join(['你好', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
  }

  document.body.appendChild(component());