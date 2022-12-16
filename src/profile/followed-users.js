import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import React, {useEffect, useMemo, useState} from "react";
import {getDetailsThunk} from "../services/search-thunks";
import {useNavigate} from "react-router";
import * as service from "../services/search-service"
import {
	findUserByIdThunk,
	findUserByUsernameThunk
} from "../services/users-thunks";

const FollowedUsers = () => {
	const {currentUser} = useSelector((state) => state.users)
	const dispatch = useDispatch()
	const navigate = useNavigate();
	
	const search = useSelector(state => state.search)
	const detail = search.currentTrack
	const followedUsers = currentUser.following
	
	const getProfiles = async (userName) => {
		const userInfo = await dispatch(findUserByUsernameThunk(userName))
		const userId = userInfo.payload._id
		await dispatch(findUserByIdThunk(userId))
		navigate(`/profile/${userId}`);
	}
	
	
	return(
		<>
			<h2 className="d-flex justify-content-center text-primary fw-bold mt-3 mb-2">Users you followed</h2>
			<ul className="list-group">
				{
					followedUsers.map((users) =>
						<li className="list-group-item" key={users}>
							<span onClick={() => getProfiles(users)}>{users}</span>
						</li>
					)
				}
			</ul>
		</>
	)
}

export default FollowedUsers