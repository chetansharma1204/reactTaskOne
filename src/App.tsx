// import './App.css';
import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
 
// import Route from './routes/route';
import Dashboard from './components/pages/Dashboard';
import ProfileSetting from './components/pages/ProfileSetting';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Setting from './components/pages/Setting';
import About from './components/pages/About';
import InvalidPage from './components/pages/PageNotFound';
 

function App(): ReactElement {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/Profile-setting' element={<ProfileSetting />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/about-us' element={<About />} />
        <Route path='*' element={<InvalidPage />} />
      </Routes>
    </div>
  );
}

export default App;
