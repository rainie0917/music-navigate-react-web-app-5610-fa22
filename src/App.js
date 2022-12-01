import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./navigation";
import usersReducer from "./reducers/users-reducer";
import Register from "./register/register";
import Login from "./login/login";
import Profile from "./users/profile";
import Users from "./users/index"
import ProtectedRoute from "./users/protected-route"
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
                            <Route index element={<Login/>}/>
                            <Route path="/users" element={
                                <ProtectedRoute>
                                    <Users/>
                                </ProtectedRoute>
                            }/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/profile" element={
                                <ProtectedRoute>
                                    <Profile/>}
                                </ProtectedRoute>
                            }/>
                        </Routes>
                    </BrowserRouter>
                </CurrentUser>
            </Provider>
        </div>
    );
}

export default App;