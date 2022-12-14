import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {
	createSongThunk,
	getDetailsThunk,
	updateSongThunk
} from "../services/search-thunks";
import axios from "axios";
import * as service from "../services/search-service";
import {updateUserThunk} from "../services/users-thunks";
const api = axios.create({withCredentials: true});

const TrackItem = ({track: track}) => {
	const currentUser = useSelector(state => state.users.currentUser)
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const getDetails = async () => {
		await dispatch(getDetailsThunk(track.mbid))
		navigate(`/details/${track.mbid}`);
	}
	
	const likeASong = async (track) => {
		// if user logged in
		if(currentUser != null){
			let songInfo = await service.searchSongInDB(track.mbid)
			// if song in DB, like += 1
			if(songInfo != null){
				let whoLikedArr = JSON.parse(JSON.stringify(track.whoLiked))
				whoLikedArr.push(currentUser.username)
				dispatch(updateSongThunk([{
					// ...track,
					artist: track.artist,
					realImg: track.realImg,
					mbid: track.mbid,
					name: track.name,
					whoLiked: whoLikedArr,
					likes: track.likes + 1,
					// liked: true,
				}, true]))
				let likedSongsArr = JSON.parse(JSON.stringify(currentUser.likedSongs))
				likedSongsArr.push(track.mbid)
				const updatedUser = {
					...currentUser,
					likedSongs: likedSongsArr
				}
				dispatch(updateUserThunk(updatedUser))
			}
			// if song not in DB, create song in DB
			else{
				dispatch(createSongThunk([{
					artist: track.artist,
					realImg: track.realImg,
					mbid: track.mbid,
					name: track.name,
					whoLiked: [currentUser.username],
					likes: 1,
				}, true]))
				let likedSongsArr = JSON.parse(JSON.stringify(currentUser.likedSongs))
				likedSongsArr.push(track.mbid)
				const updatedUser = {
					...currentUser,
					likedSongs: likedSongsArr
				}
				dispatch(updateUserThunk(updatedUser))
			}
		}
		else{
			alert("Please log in to like/unlike a song!")
		}

	}
	
	const unLikeASong = async (track) =>{
		if(currentUser != null) {
			let whoLikedArr = track.whoLiked.filter(i => i !== currentUser.username)
			dispatch(updateSongThunk([{
				artist: track.artist,
				realImg: track.realImg,
				mbid: track.mbid,
				name: track.name,
				whoLiked: whoLikedArr,
				likes: track.likes - 1,
			}, false]))
			let likedSongsArr = currentUser.likedSongs.filter(i => i !== track.mbid)
			const updatedUser = {
				...currentUser,
				likedSongs: likedSongsArr
			}
			dispatch(updateUserThunk(updatedUser))
		}
		else{
			alert("Please log in to like/unlike a song!")
		}
	}
	return(
		<li className="list-group-item">
			<div className="row">
				<div className="col-2">
					<img width={40} className="rounded-3" src={`${track.realImg}`}/>
					<span className="ps-3">
						{/*unlike a song*/}
						{track.likedByCurrentUser && <i onClick={() => unLikeASong(track)}
						                  className="fa-solid fa-heart  fs-6 text-danger"/>}
						{/*likes a song*/}
						{!track.likedByCurrentUser && <i onClick={() => likeASong(track)}
						                   className="fa-regular fa-heart  fs-6 fw-light"/>}
						{track.likes}
					</span>
				</div>
				
				<div className="col-6">
					<span
					onClick={getDetails}
					className="fw-bold">
						{track.name}
					</span>
				</div>
				
				<div className="col-4 text-end">
					{track.artist}
				</div>
				

			</div>
		</li>
	)
}

export default TrackItem