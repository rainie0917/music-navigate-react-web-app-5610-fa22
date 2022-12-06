import axios from "axios";
const SEARCH_API_URL = 'http://localhost:4000/search'
const DETAILS_API_URL = 'http://localhost:4000/details'
const BASE_API_URL = 'http://localhost:4000'
const api = axios.create({withCredentials: true});

export const searchTrack = async (title) =>{
	const response = await axios.get(`${SEARCH_API_URL}/${title}`)
	return response.data
}

export const searchSongInfo = async (mbid) =>{
	const response = await axios.get(`${DETAILS_API_URL}/${mbid}`)
	return response.data
}