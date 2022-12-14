import React from "react";
import {useDispatch} from "react-redux";
import {findUserByIdThunk, findUserByUsernameThunk} from "../services/users-thunks";
import {useNavigate} from "react-router";

export const UsersItem = ({userName: userName}) => {
	const dispatch = useDispatch()
	const navigate = useNavigate();
	
	
	const getProfiles = async (userName) => {
		const userInfo = await dispatch(findUserByUsernameThunk(userName))
		const userId = userInfo.payload._id
		await dispatch(findUserByIdThunk(userId))
		navigate(`/profile/${userId}`);
	}
	
	return(
		<li className="list-group-item"
		onClick={() => getProfiles(userName)}>
			{userName}
		</li>
	)
}