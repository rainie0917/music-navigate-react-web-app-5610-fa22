import React from "react";
import {useDispatch} from "react-redux";
import {findUserByIdThunk} from "../services/users-thunks";
import {useNavigate} from "react-router";

export const UsersItem = ({userName: userName}) => {
	const dispatch = useDispatch()
	const navigate = useNavigate();
	
	const getProfiles = async (id) => {
		await dispatch(findUserByIdThunk(id))
		navigate(`/profile/${id}`);
	}
	
	return(
		<li className="list-group-item"
		onClick={() => getProfiles(userName)}>
			{userName}
		</li>
	)
}