import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import CustomNavbar from './component/CustomNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import AddStudent from './pages/AddStudent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateForm from './pages/UpdateForm';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position='bottom-center'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/add-student' element={<AddStudent/>}/>
        <Route path='/update/:rollNo' element={<UpdateForm/>}/>
        <Route path='/profile/:rollNo' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
