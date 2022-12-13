import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {findAllUsersThunk, findUserByIdThunk} from "../services/users-thunks";
import {useNavigate} from "react-router";
import {getDetailsThunk} from "../services/search-thunks";



const DisplayUserToAnonynous = () => {
    const {users} = useSelector((state) => state.users)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])

    const findUser = (users) => {
        let roles = [];
        for (let i = 0; i < users.length && i < 5; i++) {
            roles.push(users[i])
        }
        return roles
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
                    (Array.from(findUser(users))).map((user) =>
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

export default DisplayUserToAnonynous;