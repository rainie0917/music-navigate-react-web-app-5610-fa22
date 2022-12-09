import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {getDetailsThunk} from "../services/search-thunks";
import {useNavigate} from "react-router";

const UserLikedSong = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate();


    const getDetails = async (mbid) => {
        await dispatch(getDetailsThunk(mbid))
        navigate(`/details/${mbid}`);
    }

    return(
        <>
            <h2 className="d-flex justify-content-center text-primary fw-bold mt-3 mb-2">Songs You Liked</h2>
            <ul className="list-group">
                {
                    currentUser.liked.map((like) =>
                        <li className="list-group-item" key={like.mbid}>
                            <span onClick={() => getDetails(like.mbid)}>{like.name}</span>
                        </li>
                    )
                }
            </ul>

        </>
    )
}

export default UserLikedSong