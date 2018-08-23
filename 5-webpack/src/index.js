import _ from 'lodash';
import printMe from './print.js';
import './style.css';

console.log(process.env.NODE_ENV);
function component() {
    var element = document.createElement('div');
    var br = document.createElement('br');
    var btn = document.createElement('button');

    // Lodash，现在由此脚本导入
    element.innerHTML = _.join(['你好', 'webpack!'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe;
    element.appendChild(br);
    element.appendChild(btn);

    return element;
  }

  document.body.appendChild(component());

  // HMR 热模块替换   局部刷新
  if(module.hot){
    module.hot.accept('./print.js',function(){
      console.log('Accepting the updated printMe module!');
      printMe();
    })
  }