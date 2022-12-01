import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../services/users-thunks";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutThunk())
    }
    return(
        <>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            <h1>Profile</h1>
            <h2>Welcome {currentUser.username}</h2>}
        </>
    )
}

export default Profile