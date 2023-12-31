import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ title, aboutApp, mode, toggleMode }) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} px-3`}>
      <div className='container-fluid'>
        <a className='navbar-brand fw-bold fs-2' href='/'>
          {title}
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse ' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                {aboutApp}
              </a>
            </li>
          </ul>
          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
          <div
            className={`form-check form-switch ms-3 text-${
              mode === 'light' ? 'dark' : 'light'
            }`}
          >
            <input
              class='form-check-input'
              type='checkbox'
              onClick={toggleMode}
              id='flexSwitchCheckDefault'
            />
            <label class='form-check-label' htmlFor='flexSwitchCheckDefault'>
              Change Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutApp: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
  title: 'Set title here',
  aboutApp: 'About',
}

export default Navbar
