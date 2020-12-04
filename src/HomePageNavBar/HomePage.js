import Reach from "react"
import "./HomePage.css"
import { Link } from "react-router-dom"

export const HomePage=(props)=>{
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/teacher">teachers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">customers</Link>
            </li>
        </ul>
    )
}