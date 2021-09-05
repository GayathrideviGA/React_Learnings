import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Routes from './routes/routes';



class App extends React.Component {
  render() {
    return (
      <div className='background'>
        <Routes />
      </div>
    );
  }
}

export default App

