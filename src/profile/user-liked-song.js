import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import React, {useEffect, useMemo, useState} from "react";
import {getDetailsThunk} from "../services/search-thunks";
import {useNavigate} from "react-router";
import * as service from "../services/search-service"

const UserLikedSong = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const search = useSelector(state => state.search)
    const detail = search.currentTrack
    // console.log(currentUser.likedSongs)

    const [likedsongsData, setLikedsongsData] = useState([])
    useEffect(()=>{
        const tasks = []
        for (let i = 0; i < currentUser.likedSongs.length; i++) {
            const mbid = currentUser.likedSongs[i]
            tasks.push(service.searchSongInfo(mbid))
        }
        Promise.all(tasks).then((res) => {
            setLikedsongsData(res)
        })
    },[currentUser.likedSongs])

    // console.log(likedsongsData)


    const getDetails = async (mbid) => {
        await dispatch(getDetailsThunk(mbid))
        navigate(`/details/${mbid}`);
    }


    return(
        <>
            <h2 className="d-flex justify-content-center text-primary fw-bold mt-3 mb-2">Songs You Liked</h2>
            <ul className="list-group">
                {
                    likedsongsData.map((likedSong) =>
                        <li className="list-group-item" key={likedSong.track.mbid}>
                            <span onClick={() => getDetails(likedSong.track.mbid)}>{likedSong.track.name}</span>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default UserLikedSong