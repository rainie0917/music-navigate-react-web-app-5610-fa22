import axios from "axios";
const MUSIC_API_BASE = process.env.REACT_APP_MUSIC_API_BASE;
const USER_API_URL = `${MUSIC_API_BASE}/users`;
const BASE_API_URL = `${MUSIC_API_BASE}`;
const api = axios.create({withCredentials: true});

export const findUserById = async (uid) => {
    const response = await api.get(`${USER_API_URL}/${uid}`)
    const user = response.data
    return user
}

export const register = async (user) => {
    const response = await api.post(`${BASE_API_URL}/register`, user)
    const newUser = response.data
    return newUser
}

export const login = async (user) => {
    const response = await api.post(`${BASE_API_URL}/login`, user)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${BASE_API_URL}/logout`)
    return response.data
}
export const profile = async () => {
    const response = await api.post(`${BASE_API_URL}/profile`)
    return response.data
}

export const findAllUsers = async () => {
    const response = await axios.get(USER_API_URL)
    return response.data
}

export const createUser = () => {

}

const deleteUser = () => {}
const updateUser = () => {}