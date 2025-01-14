import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className="shadow bg-black text-white fixed top-0 left-0 w-full z-10">
      <Container>
        {/* For large screens */}
        <nav className="hidden xl:flex items-center justify-between px-4 py-2">
          {/* Logo aligned to the left */}
          <div className="absolute left-2 top-0">
            <Link to="/">
              <Logo width="50px" />
            </Link>
          </div>

          {/* Navigation items */}
          <ul className="flex ml-auto space-x-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-orange-800 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {/* Only show Logout button if authenticated */}
            {authStatus && (
              <li className="absolute right-5 top-2">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>

        {/* For custom medium and small screens */}
        <nav className="flex  xl:hidden items-center justify-between px-4 py-2">
          {/* Logo hidden on small screens */}
          <div className="hidden custom-md:block">
            <Link to="/">
              <Logo width="50px" />
            </Link>
          </div>

          {/* Navigation items */}
          <ul className="flex items-center space-x-3 ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-4 py-2 duration-200 hover:bg-orange-800 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {/* Only show Logout button if authenticated */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
