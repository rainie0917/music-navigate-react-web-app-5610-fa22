import axios from "axios";
const BASE_API_URL = process.env.MUSIC_APP_BASE_API_URL;
const USERS_API = "http://localhost:4000";
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