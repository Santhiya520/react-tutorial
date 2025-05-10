import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/mystyle.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Default from './components/Default';
function Cart(){
  return(
  <h2>cart</h2>
  );
}
function Bin(){
  return(
    <div>
      <Cart/>
      <h4>this is bin</h4>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Default/>
    <Bin />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
