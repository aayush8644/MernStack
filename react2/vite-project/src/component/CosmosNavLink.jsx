import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './CosmosNavLink.css'

const CosmosNavLink = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="cosmos-header">
      <div className="cosmos-brand">Cosmos</div>
      <button
        className={`cosmos-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`cosmos-nav ${menuOpen ? 'show' : ''}`}>
        <NavLink to="/product" onClick={() => setMenuOpen(false)}>
          Product
        </NavLink>
        <NavLink to="/product/create" onClick={() => setMenuOpen(false)}>
          Create Product
        </NavLink>
        <NavLink to="/user" onClick={() => setMenuOpen(false)}>
          User
        </NavLink>
        <NavLink to="/user/create" onClick={() => setMenuOpen(false)}>
          Create User
        </NavLink>
        <NavLink to="/school" onClick={() => setMenuOpen(false)}>
          School
        </NavLink>
        <NavLink to="/school/create" onClick={() => setMenuOpen(false)}>
          Create School
        </NavLink>
      </nav>
    </header>
  )
}

export default CosmosNavLink
