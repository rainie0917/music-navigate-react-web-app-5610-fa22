import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "../services/users-thunks.js";

const Users = () => {
  const {users, loading} = useSelector((state) => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findAllUsersThunk())
  }, [dispatch])
  return(
      <>
        <h1>Users {users.length}</h1>
        <ul className="list-group">
          {
            users.map((user) =>
                <li className="list-group-item"
                    key={user._id}>
                  {user.username}
                </li>
            )
          }
        </ul>
      </>
  )
}

export default Users