import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router";
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

    const deleteUserHandler = (id) => {
        dispatch(deleteUserThunk(id));
        window.location.reload(true);
        alert("User has been deleted successfully!")
        console.log("User has been deleted!")
    }


    return(
        <>
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
                        <div>
                            <div className="row justify-content-between">
                                <div className="fw-bold mb-0 text-secondary col-auto">UserID: {user._id}</div>
                                <button className="btn btn-danger col-2" onClick={() => deleteUserHandler(user._id)}>Delete</button>
                                <div className="ms-3">
                            </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Email:<span className="text-dark ps-2">{user.username}</span></div></li>
                                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Email:<span className="text-dark ps-2">{user.email}</span></div></li>
                                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Last Name:<span className="text-dark ps-2">{user.lastName}</span></div></li>
                                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">First Name:<span className="text-dark ps-2">{user.firstName}</span></div></li>
                                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Role<span className="text-dark ps-2">{user.role}</span></div></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    )
                }
            </ul>
        </>
    )
}

export default Users