import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from 'context/auth';
import './index.css';
import App from './App';

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter basename="/QuickQuizMaker/">
      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root'),
);

// ReactDOM.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <BrowserRouter basename="/QuickQuizMaker/">
//         <App />
//       </BrowserRouter>
//     </AuthProvider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
