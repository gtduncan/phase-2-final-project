import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";

const Nav = () => {
    return(<div>
        <nav>
          <ul>
            <li>
              <Link to="/">Rent</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul>
        </nav>
        <hr />
    </div>)
}

export default Nav