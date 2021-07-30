import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/artists" className="navbar-link">Artists</Link>
      <Link to="/songs" className="navbar-link">Songs</Link>
    </div>
  )
}