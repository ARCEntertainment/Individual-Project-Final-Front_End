import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/Style/App.css';
import Home from './Pages/Home/home';
import Register from './Pages/Connexion/register.jsx';
import store from './Redux/store'
import Music from './Pages/Music/music';


function App() {
  return (
      <Provider store={store}>

        <BrowserRouter>

          <Routes>

            <Route path='/home' element={<Home />} />
            <Route path='/*' element={<Home />} />
            <Route path='/social' element={<Register />} />
            <Route path='/music' element={<Music />} />


          </Routes>

        </BrowserRouter>

      </Provider>
    

  );
}

export default App;
