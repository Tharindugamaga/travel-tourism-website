import React, { useRef, useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Header.css';

const nav__links = [
  { path: '/home', display: 'Home' },
  { path: '/tours', display: 'Tours' },
  { path: '/hotels', display: 'Hotels' },
  { path: '/about', display: 'About' },
];

const Header = () => {
  const headerRef = useRef(null);

  const stickyHeaderFun = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add('sticky__header');
    } else {
      headerRef.current.classList.remove('sticky__header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyHeaderFun);

    return () => {
      window.removeEventListener('scroll', stickyHeaderFun);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>

            {/* Menu */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'active__link' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side Buttons */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <NavLink to="/login">
                  <Button className="btn secondary__btn">Login</Button>
                </NavLink>
                <NavLink to="/register">
                  <Button className="btn orange-btn">Register</Button>
                </NavLink>
              </div>
              <span className="mobile__menu">
                <i className="ri-menu-fill"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
