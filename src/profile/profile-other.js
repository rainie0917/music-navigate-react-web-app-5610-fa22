import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {findUserByIdThunk, updateUserThunk} from "../services/users-thunks";

const ProfileOther = () => {
    const {uid} = useParams();
    const dispatch = useDispatch();
    const {otherUser} = useSelector(state => state.users);
    useEffect(() => {dispatch(findUserByIdThunk(uid))}, [uid])

    // console.log(otherUser);
    
    const currentUser = useSelector(state => state.users.currentUser)
    
    const followUser = () => {
        let followingArr = JSON.parse(JSON.stringify(currentUser.following))
        followingArr.push(otherUser.username)
        const updatedUser = {
            ...currentUser,
            following: followingArr
        }
        dispatch(updateUserThunk(updatedUser))
        alert(`Followed ${otherUser.username}!`)
    }
    
    const unFollowUser = () => {
        let followingArr = currentUser.following.filter(i => i !== otherUser.username)
        const updatedUser = {
            ...currentUser,
            following: followingArr
        }
        dispatch(updateUserThunk(updatedUser))
        alert(`Unfollowed ${otherUser.username}!`)
    }
    
    const isFollowing = () => {
        return currentUser.following.indexOf(otherUser.username) > -1
    }

    return(
        <>
            {/*<h1>Hello</h1>*/}
            <h2>{otherUser.username}'s Profile</h2>
            <div className="ms-3">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">User Name:<span className="text-dark ps-2">{otherUser.username}</span></div></li>
                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Email:<span className="text-dark ps-2">{otherUser.email}</span></div></li>
                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Last Name:<span className="text-dark ps-2">This is private information</span></div></li>
                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">First Name:<span className="text-dark ps-2">This is private information</span></div></li>
                    <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Role<span className="text-dark ps-2">{otherUser.role}</span></div></li>
                </ul>
            </div>
            {
                currentUser && !isFollowing() &&
                <span className="btn btn-primary rounded-pill mt-3"
                      onClick={followUser}>
                    Follow {otherUser.username}
                </span>
            }
    
            {
                currentUser && isFollowing() &&
                <span className="btn btn-danger rounded-pill mt-3"
                      onClick={unFollowUser}>
                    Unfollow {otherUser.username}
                </span>
            }

        </>
    )
}

export default ProfileOther