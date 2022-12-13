import {createSlice} from "@reduxjs/toolkit";
import {
    profileThunk,
    logoutThunk,
    loginThunk,
    registerThunk,
    updateUserThunk,
    deleteUserThunk,
    findAllUsersThunk,
    findUserByIdThunk

} from "../services/users-thunks.js";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        users: [],
        currentUser: null,
        error: null
    },
    extraReducers: {
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [loginThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [registerThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [profileThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },
        [updateUserThunk.fulfilled]: (state, action) => {
            const userIdx = state.users.findIndex(
                (t) => t._id === action.payload._id)
            state.users[userIdx] = {
                ...state.users[userIdx],
                ...action.payload
            }
            state.currentUser = action.payload
        },
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [findUserByIdThunk.fulfilled]: (state, {payload}) => {
            state.otherUser = payload;
        },
        [deleteUserThunk.fulfilled] : (state, { payload }) => {
            state.loading = false
            state.users = state.users.filter(u => u._id !== payload)
        }
    }
})

export default usersReducer.reducer