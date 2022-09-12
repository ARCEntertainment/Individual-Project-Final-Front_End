// import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/Style/App.css';
import Home from './Pages/Home/home';
import Register from './Pages/Social/login-register';
// import store from './Redux/store.js'

function App() {
  return (

    // <Provider store={store}>

      <BrowserRouter>

        <Routes>

          <Route path='/home' element={<Home />} />
          <Route path='/*' element={<Home />} />
          <Route path='/social' element={<Register />} />

        </Routes>

      </BrowserRouter>

    // </Provider>

  );
}

export default App;
