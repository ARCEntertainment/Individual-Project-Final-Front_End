import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/Style/App.css';
import Home from './Pages/Home/home';
import store from './Redux/Store.jsx'

function App() {
  return (

      <Provider store={store}>

        <BrowserRouter>

          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/*' element={<Home/>} />

          </Routes>

        </BrowserRouter>

      </Provider>

  );
}

export default App;
