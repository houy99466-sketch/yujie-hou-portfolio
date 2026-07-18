import { useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

import { navItems, publicLinks, siteMeta } from '../data/site.js'

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">
        跳到正文
      </a>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="侯宇杰首页" onClick={closeMenu}>
          <span className="brand-mark">侯</span>
          <span className="brand-copy">
            <strong>{siteMeta.name}</strong>
            <small>Systems · Control · AI</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? '关闭导航菜单' : '打开导航菜单'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          className={`primary-nav ${menuOpen ? 'is-open' : ''}`}
          id="primary-navigation"
          aria-label="主导航"
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
        </nav>

        <a
          className="header-download"
          href={publicLinks.portfolio}
          download
          aria-label="下载中文作品集 PDF"
        >
          <Download aria-hidden="true" size={17} />
          <span>作品集</span>
        </a>
      </header>

      <main id="main-content" tabIndex="-1" key={location.pathname}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="shell footer-layout">
          <div>
            <strong>{siteMeta.name}</strong>
            <span>机器人、控制、数字孪生与 AI 系统</span>
          </div>
          <div className="footer-links">
            <a href={publicLinks.email}>邮件</a>
            <a href={publicLinks.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <Link to="/profile">经历与成果</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

