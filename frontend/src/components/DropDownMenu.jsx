import React, { useEffect, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function DropDownMenu({ onClose }) {
  const menuRef = useRef();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const userRole = localStorage.getItem('role');

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  const handleLogout = () => {
    localStorage.removeItem('role');
    auth.signOut();
    navigate('/login');
  };

  const buttonClasses = 'w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors';
  const logoutClasses = 'w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors';

  return (
    <div className='fixed inset-0 z-50' ref={menuRef}>
      <div className='absolute right-0 top-16 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
        <div className='py-1'>
          {!user && (
            <>
              <button className={buttonClasses} onClick={() => handleNavigate('/login')}>
                Masuk / Daftar
              </button>
              <button className={buttonClasses} onClick={() => handleNavigate('/faq')}>
                FAQ
              </button>
            </>
          )}

          {user && userRole === 'customer' && (
            <>
              <button className={buttonClasses} onClick={() => handleNavigate('/user/profile')}>
                Profil
              </button>
              <button className={buttonClasses} onClick={() => handleNavigate('/faq')}>
                FAQ
              </button>
              <button className={logoutClasses} onClick={handleLogout}>
                Keluar
              </button>
            </>
          )}

          {user && userRole === 'mitra' && (
            <>
              <button className={buttonClasses} onClick={() => handleNavigate('/mitra/profile')}>
                Profil Laundry
              </button>
              <button className={buttonClasses} onClick={() => handleNavigate('/faq')}>
                FAQ
              </button>
              <button className={logoutClasses} onClick={handleLogout}>
                Keluar
              </button>
            </>
          )}

          {user && !userRole && (
            <>
              <button className={buttonClasses} onClick={() => handleNavigate('/user/profile')}>
                Profil
              </button>
              <button className={buttonClasses} onClick={() => handleNavigate('/faq')}>
                FAQ
              </button>
              <button className={logoutClasses} onClick={handleLogout}>
                Keluar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
