import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {findAllUsersThunk, findUserByIdThunk, deleteUserThunk, logoutThunk} from "../services/users-thunks.js";

const Users = () => {
    const {users, loading} = useSelector((state) => state.users)
    const {currentUser} = useSelector((state) => state.users)
    console.log(users);
    const dispatch = useDispatch()
    useEffect(() => {
        const res = findAllUsersThunk()
        dispatch(res)
    }, [dispatch])

    const navigate = useNavigate();
    const getProfiles = async (id) => {
        dispatch(findUserByIdThunk(id))
        navigate(`/profile/${id}`);
    }

    const deleteUserHandler = (id) => {
        dispatch(deleteUserThunk(id));
    }

    const handleLogout = () => {
            dispatch(logoutThunk())
    }

    return(
        <>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            <h2 className="d-flex justify-content-center text-primary fw-bold mt-3 mb-2">Manage Users {users.length}</h2>
            <ul className="list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                    users.map((user) =>
                    <li className="list-group-item"
                        key={user._id}>
                        <span onClick={() => getProfiles(user._id)}>Username: {user.username}</span>
                        <i className="bi bi-x-lg float-end" onClick={() => deleteUserHandler(user._id)}></i>
                    </li>
                    )
                }
            </ul>
        </>
    )
}

export default Users