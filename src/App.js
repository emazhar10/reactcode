import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './login/login';
import Registeration from './register/register';
import Forgetpassword from './forgetpassword/forgetpassword';
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>}></Route>
      <Route exact path="/register" element={<Registeration/>}></Route>   
      <Route exact path="/forgetpassword" element={<Forgetpassword/>}></Route> 
    </Routes>
  );
}

export default App;
