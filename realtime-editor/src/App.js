import './App.css';
import Login from './Components/Login';
import MainPage from './Components/MainPage';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import {Toaster} from 'react-hot-toast';

function App() {
  return (
    <>
    <div>
      <Toaster position='top-right' toastOptions={{success: {theme: {primary: '4aed88'}}}}></Toaster>
    </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/editor/:roomId" element={<MainPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



// import React from 'react';
// import { ReactDOM } from 'react-dom';
// import { Toaster } from 'react-hot-toast';
// import './App.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Login from './Components/Login';
// import MainPage from './Components/MainPage';

// function App() {
//   return (
//   <>
//    <div>
//     <Toaster position='top-right' toastOptions={{success:{theme:{primary:'#4aed88'}}}}></Toaster>
//    </div>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login/>}></Route>
//         <Route path="/editor/:roomId" element={<MainPage/>}></Route>
//       </Routes>
//     </BrowserRouter>
//   </>
//   );
// }

// export default App;
