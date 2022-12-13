import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {findAllUsersThunk, findUserByIdThunk} from "../services/users-thunks";
import {useNavigate} from "react-router";
import {getDetailsThunk} from "../services/search-thunks";



const SameRoleUser = () => {
    const {users} = useSelector((state) => state.users)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])

    const findSameRoleUser = (users, currentUser) => {
        let roles = [];
        if (currentUser) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].role == currentUser.role && users[i]._id !== currentUser._id) {
                    roles.push(users[i])
                }
            }
            return roles.splice(0,5)
        }
    }

    const navigate = useNavigate();
    const getProfiles = async (id) => {
        await dispatch(findUserByIdThunk(id))
        navigate(`/profile/${id}`);
    }

    return(
        <>
            <h2 className="d-flex justify-content-center text-primary fw-bold mt-3 mb-2">Users You Might Interested</h2>
            <ul className="list-group">
                {
                    (Array.from(findSameRoleUser(users, currentUser))).map((user) =>
                        <li className="list-group-item"
                            key={user._id}>
                            <span onClick={() => getProfiles(user._id)}>{user.username}</span>
                        </li>

                    )
                }
            </ul>
        </>
    )
}

export default SameRoleUser;