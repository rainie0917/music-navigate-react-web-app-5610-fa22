import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {findUserByIdThunk} from "../services/users-thunks";

const ProfileAdmin = () => {
    const {uid} = useParams();
    const dispatch = useDispatch();
    const {otherUser} = useSelector(state => state.users);
    useEffect(() => {dispatch(findUserByIdThunk(uid))}, [uid])

    console.log(otherUser);

    return(
        <>
            {/*<h1>Hello</h1>*/}
            <h2>{otherUser.username}'s Profile</h2>
            <div className="ms-3">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">User Name:<span className="text-dark ps-2">{otherUser.username}</span></div></li>
                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Email:<span className="text-dark ps-2">{otherUser.email}</span></div></li>
                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Last Name:<span className="text-dark ps-2">{otherUser.lastName}</span></div></li>
                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">First Name:<span className="text-dark ps-2">{otherUser.firstName}</span></div></li>
                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Role<span className="text-dark ps-2">{otherUser.role}</span></div></li>
                </ul>
            </div>
        </>
    )
}

export default ProfileAdmin