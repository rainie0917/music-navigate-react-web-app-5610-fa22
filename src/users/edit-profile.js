import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useState} from "react";
import React from "react";
// TODO: need to import user thunk and user reducer
// import {updateProfileThunk} from "./profile-service/profile-thunks";
// import {updateProfile} from "../profile/profile-reducer";
import {updateUserThunk} from "../services/users-thunks";


const EditProfile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [name, setName] = useState(currentUser.username);
    const [email, setEmailString] = useState(currentUser.email);
    const [password, setPasswordString] = useState(currentUser.password);
    const [firstName, setFirstName] = useState(currentUser.firstName);
    const [lastName, setLastName] = useState(currentUser.lastName);

    // const [dateInEdit, setDateInEdit] = useState(false);

    const changeName = (event) => {
        setName(event.target.value);
    };


    const changeEmail = (event) => {
        setEmailString(event.target.value);
    };


    const changePassword = (event) => {
        setPasswordString(event.target.value);
    };

    const changeFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const changeLastName = (event) => {
        setLastName(event.target.value);
    };


    const dispatch = useDispatch();
    const saveHandler = () => {
        const newProfile = {
            username: name,
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        }
        dispatch(updateUserThunk(currentUser._id, newProfile)); // TODO: add updateUserThunk
        // dispatch(updateProfile(newProfile)); // TODO: to be deleted
    };
    console.log(currentUser._id);
    return (
        <div className="container w-50">
            <div className="d-flex align-items-center row mt-2 mb-2">
                <div className="col-1">
                    <Link to={"/profile"}><i className="bi bi-x-square fa-xl col-1 pt-1 fw-bold text-primary"></i></Link>
                </div>
                <div className="col-4">
                    <h3 className="mb-0 fw-bolder">Edit Profile</h3>
                </div>
                <div className="col-7">
                    <Link to="/profile"><button className="btn btn-primary float-end rounded-pill me-2" onClick={() => saveHandler()}>Save</button></Link>
                </div>
            </div>
            <div className="ms-3 wd-nudge-up">
                <div className="mb-3">
                    <label className="ps-1 fa-lg pb-3 text-dark">Username</label>
                    <input type="text" className="form-control text-bg-light pt-0" value={name}
                           onChange={changeName}/>
                </div>
                <div className="mb-3">
                    <label className="ps-1 fa-lg pb-3 text-dark">Email</label>
                    <input type="text" className="form-control text-bg-light pt-0" value={email}
                           onChange={changeEmail}/>
                </div>
                <div className="mb-3">
                    <label className="ps-1 fa-lg pb-3 text-dark">Password</label>
                    <input type="text" className="form-control text-bg-light pt-0" value={password}
                           onChange={changePassword}/>
                </div>
                <div className="mb-3">
                    <label className="ps-1 fa-lg pb-3 text-dark">First Name</label>
                    <input type="text" className="form-control text-bg-light pt-0" value={firstName}
                           onChange={changeFirstName}/>
                </div>
                <div className="mb-3">
                    <label className="ps-1 fa-lg pb-3 text-dark">Last Name</label>
                    <input type="text" className="form-control text-bg-light pt-0" value={lastName}
                           onChange={changeLastName}/>
                </div>
            </div>
        </div>)
};
export default EditProfile;