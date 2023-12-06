import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
// Assuming you have auth exported from './firebase'

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <div className="container-fluid flex flex-between">
          <a className="navbar-brand" href="/">
            <b className="fs-3">Triveous</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news">
                  News
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            {user ? (
              <div className='d-flex align-items-center'>
                <p className="text-white m-0 me-2">
                   {user.displayName}
                </p>
                <button
                  className="px-3 py-1 br-2 rounded-pill"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button className="px-4 py-2 br-2 rounded-pill">
                <Link className="text-decoration-none " to="/login">
                  Login
                </Link>
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
