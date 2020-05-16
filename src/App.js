// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from "react";
import CourseDetails from "./components/CourseDetails";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import ChapterDetails from "./components/ChapterDetails";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/courses">Course</Link>

        <Route path="/courses" component={CourseDetails} />
        <Route path="/chapter/:id" component={ChapterDetails} />
      </div>
    </BrowserRouter>
  );
}
export default App;
