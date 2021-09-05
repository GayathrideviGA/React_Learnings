import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import todoStore from './redux/store';
import Routes from './routes/routes';

const store = todoStore
// todoStore.subscribe(() => {
//   // When state will be updated(in our case, when items will be fetched),
//   // we will update local component state and force component to rerender
//   // with new data.

//   this.setState({
//     todos: todoStore.getState().todos
//   });
// });
class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
        <div className='background'>
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App