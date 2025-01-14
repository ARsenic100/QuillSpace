import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './appwrite/auth.js';
import { login, logout } from './store/authSlice.js';
import { Footer, Header } from './components/index.js';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="text-black min-h-screen flex flex-col left-0 right-0  " >
      {/* Header Section */}
      <Header />
      
      <div className="flex flex-col pt-10 flex-grow left-0 right-0 absolute  "  style={{ background: 'linear-gradient(to right, #87CEFA, #7EC8E3, #66B5CC, #4E99B6, #33859F)' }}  >
        {/* Main Content Section */}
        <main className="flex-grow ">
          <Outlet />
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
