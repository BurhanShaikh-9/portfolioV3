import { Link } from "react-router-dom"
import { ROUTES } from "../../utils/ROUTES"


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={ROUTES.BLOGS}>Blogs</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header
