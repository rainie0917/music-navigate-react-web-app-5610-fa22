import axios from "axios";
const MUSIC_API_BASE = process.env.REACT_APP_MUSIC_API_BASE;
const USERS_API = `${MUSIC_API_BASE}`;
const api = axios.create({withCredentials: "true"});

export const register = async (user) => {
    const response = await api.post(`${USERS_API}/register`, user)
    return response.data
}

export const login = async (user) => {
    const response = await api.post(`${USERS_API}/login`, user)
    return response.data
}

export const profile = async () => {
    const response = await axios.post(`${USERS_API}/profile`)
    return response.data
}

export const logout = async () => {
    const response = await axios.post(`${USERS_API}/logout`)
    return response.data
}