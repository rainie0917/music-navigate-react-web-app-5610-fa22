import {useEffect} from "react";
import {profileThunk} from "../services/users-thunks.js";
import {useDispatch, useSelector} from "react-redux";

const CurrentUser = ({children}) => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    }, [dispatch])
    return(children)
}

export default CurrentUser