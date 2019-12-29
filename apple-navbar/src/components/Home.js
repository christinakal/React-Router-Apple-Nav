import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"


function Home() {
    return (
        <div>
            <nav>
                <Link to="/">
                    <a>Home</a>
                </Link>
                <Link to="/mac">
                    <a>Mac</a>
                </Link>
                <Link to="/ipad"> 
                    <a>iPad</a>
                </Link>
                <Link to="/iphone">
                    <a>iPhone</a>
                </Link>
                <Link to="/watch">
                    <a>Watch</a>
                </Link>
                <Link to="/tv">
                    <a>TV</a>
                </Link>
                <Link to="/music">
                    <a>Music</a>
                </Link>
                <Link to="/support">
                    <a>Support</a>
                </Link>
            </nav>
        </div>
    )
}

export default Home
