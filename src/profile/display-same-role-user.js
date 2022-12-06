import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {findAllUsersThunk} from "../services/users-thunks";



const SameRoleUser = () => {
    const {users} = useSelector((state) => state.users)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])

    //TODO: add a function here
    const roles = [];

    for (let i=0; i<5; i++) {
        if (users[i].role == currentUser.role && users[i]._id !== currentUser._id) {
            roles.push(users[i])
        }
    }

    // console.log(users[1].role);
    // console.log(roles);

    return(
        <>
            <h1>Users You Might Interested</h1>
            <ul className="list-group">
                {
                    roles.map((role) =>
                        <Link to={`/profile/${role._id}`}>
                        <li className="list-group-item"
                            key={role._id}>
                            {role.username}
                        </li>
                        </Link>
                    )
                }
            </ul>

        </>
    )
}

export default SameRoleUser;