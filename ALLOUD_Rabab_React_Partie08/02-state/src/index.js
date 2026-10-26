import React from 'react';
import ReactDOM from 'react-dom/client';
import Message from './components/Message';
import CompteurVisites from './components/CompteurVisites';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  return (
    <div className="container">
      <Message />
      <hr />
      <CompteurVisites />
    </div>
  );
}
root.render(<App />);
