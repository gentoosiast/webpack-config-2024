// import { hello } from './module2';
import { input } from './components/input/input';
import webpackLogo from './assets/webpack.png';
import 'modern-normalize';
import './styles/global.scss';

const logo = document.createElement('img');

logo.src = webpackLogo;

const button = document.createElement('button');

button.textContent = 'Throw error';
button.onclick = () => {
  throw new Error('Sample error');
};

document.body.append(input, logo, button);
