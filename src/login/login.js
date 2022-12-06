import {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../services/users-thunks.js";
import {Navigate} from "react-router";

const Login = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
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
            <h2 className="d-flex justify-content-center text-primary fw-bold mt-3 mb-2">Login</h2>
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
                className="btn btn-primary w-100 mb-2">
                Login
            </button>
            <div className="d-flex justify-content-center text-primary mb-2">
                <label className="mt-1">Have an account? Sign up for free</label>
                <Link className="ms-1 mt-1" to="/register">Register</Link>
            </div>
        </>
    )
}

export default Login