import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../services/users-thunks.js";
import {Navigate} from "react-router";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        setError(null)
        const loginUser = {username, password}
        dispatch(loginThunk(loginUser))
    }
    if(currentUser) {
            return (<Navigate to={'/profile'}/>)
    }
    return(
        <>
            <h1>Login</h1>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }
            <input
                className="form-control mb-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
            <input
                className="form-control mb-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            <button
                onClick={handleLoginBtn}
                className="btn btn-primary w-100">
                Login
            </button>
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }
        </>
    )
}

export default Login