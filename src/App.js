import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/Style/App.css';
import Home from './Pages/Home/home';
// import Register from './Pages/Connexion/register.jsx';
import store from './Redux/store'
import Music from './Pages/Music/music';
import Login from './Pages/Connexion/login';
import Register from './Pages/Connexion/register'
import Player from './Composant/Music Playert/player';
// import FormContact from './Composant/Form-Contact/form-contact';


function App() {
  return (
      <Provider store={store}>

        <BrowserRouter>

          <Routes>

            <Route path='/home' element={<Home />} />
            <Route path='/*' element={<Home />} />
            <Route path='/conexion' element={<Login />} />
            <Route path='/music' element={<Music />} />
            <Route path='/register' element={<Register />} />
            {/* <Route path='/contact' element={<FormContact />} /> */}


          </Routes>
          <Player />

        </BrowserRouter>

      </Provider>
    

  );
}

export default App;
