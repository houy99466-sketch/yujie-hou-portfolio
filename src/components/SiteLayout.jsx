import { useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

import { getNavItems, getSiteMeta, publicLinks } from '../data/site.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { language, setLanguage, copy } = useLanguage()
  const siteMeta = getSiteMeta(language)
  const navItems = getNavItems(language)

  const closeMenu = () => setMenuOpen(false)
  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage)
    closeMenu()
  }

  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">
        {copy.shell.skip}
      </a>
      <header className="site-header">
        <Link className="brand" to="/" aria-label={copy.shell.homeLabel} onClick={closeMenu}>
          <span className="brand-mark">{siteMeta.mark}</span>
          <span className="brand-copy">
            <strong>{siteMeta.name}</strong>
            <small>Systems · Control · AI</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? copy.shell.closeMenu : copy.shell.openMenu}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          className={`primary-nav ${menuOpen ? 'is-open' : ''}`}
          id="primary-navigation"
          aria-label={copy.shell.navigation}
        >
          {navItems.map((item) => (
            <NavLink
              to={item.href}
              end={item.end}
              key={item.href}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="language-switch" role="group" aria-label={copy.shell.language}>
            <button
              type="button"
              aria-label="中文"
              aria-pressed={language === 'zh'}
              onClick={() => changeLanguage('zh')}
            >
              中文
            </button>
            <button
              type="button"
              aria-label="English"
              aria-pressed={language === 'en'}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </div>
        </nav>

        <a
          className="header-download"
          href={publicLinks.portfolio}
          download
          aria-label={copy.shell.downloadPortfolio}
        >
          <Download aria-hidden="true" size={17} />
          <span>{copy.shell.portfolio}</span>
        </a>
      </header>

      <main id="main-content" tabIndex="-1" key={location.pathname}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="shell footer-layout">
          <div>
            <strong>{siteMeta.name}</strong>
            <span>{copy.shell.footerDescription}</span>
          </div>
          <div className="footer-links">
            <Link to="/contact">{copy.shell.email}</Link>
            <a href={publicLinks.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <Link to="/profile">{copy.shell.profile}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

