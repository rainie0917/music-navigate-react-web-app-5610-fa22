import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../services/users-thunks";
import {Link} from "react-router-dom";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutThunk())
    }
    console.log({currentUser});
    return(
        <>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            <h2>{currentUser.username}'s Profile</h2>
            <div className="navbar col-3">
                <Link to="/edit-profile" className="btn border rounded-4 "> Edit Profile</Link>
            </div>
            <div className="ms-3">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">User Name:<span className="text-dark ps-2">{currentUser.username}</span></div></li>
                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Password:<span className="text-dark ps-2">{currentUser.password}</span></div></li>
                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Email:<span className="text-dark ps-2">{currentUser.email}</span></div></li>
                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Last Name:<span className="text-dark ps-2">{currentUser.lastName}</span></div></li>
                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">First Name:<span className="text-dark ps-2">{currentUser.firstName}</span></div></li>
                </ul>
            </div>
        </>
    )
}

export default Profile