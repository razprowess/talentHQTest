import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLoginUser } from '../../redux/auth/selectors';
import './style.css';
function Navbar(props: any) {
    function logout(){
     localStorage.removeItem("user")  
    }
    const loggedInUser  = useSelector(getLoginUser);

    return <div className="navbar">

        <div className="main">
            <div className="left">
                <h3><b>SHAPES</b></h3>
            </div>

            <div className="right">
                {loggedInUser?.email && <Link to="/login" onClick={logout} className="logout-link">LOGOUT</Link>}
            </div>
        </div>


    </div>

}

export default Navbar;