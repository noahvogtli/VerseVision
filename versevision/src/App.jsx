import './App.css'
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';
import Chat from './pages/chat';
import LogIn from './pages/login';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import PrivateRoute from './components/privateroute';
import Signup from './pages/signup';
import About from './pages/about';
import { supabase } from './supabaseclient';
import React from 'react';
import Settings from './pages/settings';

function App() {

  const [displayName, setDisplayName] = React.useState('');

  React.useEffect(() => {
      const fetchUser = async () => {
          const { data, error } = await supabase.auth.getUser();
          if (error) console.error(error);
          const name = data.user?.user_metadata?.display_name || '';
          setDisplayName(name);
      };
      fetchUser();
      }, []);

  

  return (
    <>
      <Header name={displayName} />
      <Routes>
        <Route path="/" element={<div className='w-[90dvw] md:w-[60dvw] mx-auto'><Home name={displayName} /></div>} />
        <Route path='/chat' element={<PrivateRoute><Chat /></PrivateRoute>} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<div className='w-[90dvw] md:w-[60dvw] mx-auto'><About /></div>} />
        <Route path='/settings' element={<PrivateRoute><Settings name={displayName} /></PrivateRoute>} />
        <Route path='*' element={<Navigate to="/" />} />
        <Route ></Route>
      </Routes>
      {/* <VerseOfTheDay /> */}
      <Footer />

    </>
  )
}

export default App;