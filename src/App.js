import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


export class App extends Component  {

  // const [state,setState] = useState()

// omitted the rest of the component...  
   componentDidMount= () => {
  if (window.dataLayer) {
    const a =  window.dataLayer.push({ event: "optimize.activate" });
     console.log(window.dataLayer, a, window.dataLayer)
  }
  this.intervalId = setInterval(() => {
    if (window.google_optimize !== undefined) {
      const variant = window.google_optimize.get("BxjfMbCNQCmo6-HJOjZ8Vw");
      this.setState({ variant });
      console.log(window.google_optimize,variant)
      clearInterval(this.intervalId);
    }
  }, 100);
}

// // Code snippet 1
// function checkGoogleOptimizeLoading() {
//   if (window.google_optimize !== undefined) {
//       const variant =  window.google_optimize.get("BxjfMbCNQCmo6-HJOjZ8Vw");
//       setState({ variant });
//   }
//   else {
//       //setTimeout(checkGoogleOptimizeLoading, 200);
//   }

// }
// setTimeout(checkGoogleOptimizeLoading, 200);
// // Code snippet 2 (returns '1' or '0')
// window.google_optimize.get("BxjfMbCNQCmo6-HJOjZ8Vw");

// render goes here...

render() {
  return( <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>) 

}
}