import axios from "axios";
const SEARCH_API_URL = 'http://localhost:4000/search'
const DETAILS_API_URL = 'http://localhost:4000/details'
const SONGS_API_URL = 'http://localhost:4000/songs'
const BASE_API_URL = 'http://localhost:4000'
const api = axios.create({withCredentials: true});

export const searchSongs = async (title) =>{
	const response = await axios.get(`${SEARCH_API_URL}/${title}`)
	return response.data
}

export const searchSongInfo = async (mbid) =>{
	const response = await axios.get(`${DETAILS_API_URL}/${mbid}`)
	return response.data
}

export const searchSongInDB = async (mbid) => {
	const response = await axios.get(`${SONGS_API_URL}/${mbid}`)
	return response.data
}

export const updateSong = async(arr) => {
	const song = arr[0]
	const likedByCurrentUser = arr[1]
	const response = await axios.put(`${SONGS_API_URL}/${song.mbid}`, song)
	song.likedByCurrentUser = likedByCurrentUser
	return song
}

export const createSong = async(arr) =>{
	const song = arr[0]
	const likedByCurrentUser = arr[1]
	const response = await axios.post(SONGS_API_URL, song)
	response.data.likedByCurrentUser = likedByCurrentUser
	return response.data
}
