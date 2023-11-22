import { Link } from "react-router-dom"

export default function Navbar() {
    return (
    <nav className="nav">
        <Link to="/" className="title">Hw6-React</Link>
        <ul>
            <li>
                <Link to="/game">Tic-Tac-Toe</Link>
            </li>
            <li>
                <Link to="/api">API</Link>
            </li>
        </ul>
    </nav>
    )
}