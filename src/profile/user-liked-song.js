import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import React, {useEffect} from "react";

const UserLikedSong = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()


    return(
        <>
            <h1>Songs You Liked</h1>
            <ul className="list-group">
                {
                    currentUser.liked.map((like) =>
                        <Link>
                            <li className="list-group-item">
                                {like.title}
                            </li>
                        </Link>
                    )
                }
            </ul>

        </>
    )
}

export default UserLikedSong