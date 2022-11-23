import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./navigation";
import UserList from "./users";
import usersReducer from "./reducers/users-reducer";
import Register from "./register/register";
import Login from "./login/login";
import CurrentUser from "./users/current-user";

const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

function App() {
    return (
        <div className="container mt-4 mb-4">
            <Provider store={store}>
                <CurrentUser>
                    <BrowserRouter>
                        <Navigation/>
                        <Routes>
                            <Route index element={<UserList/>}/>
                            <Route path="/users" element={<UserList/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </BrowserRouter>
                </CurrentUser>
            </Provider>
        </div>
    );
}

export default App;