import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import usersReducer from "./reducers/users-reducer";
import Register from "./register/register";
import Login from "./login/login";
import Profile from "./users/profile";
import Users from "./users/index"
import HomeComponent from "./home/index"
import NavigationSidebar from "./navigation-sidebar";
import ProtectedRoute from "./users/protected-route"
import CurrentUser from "./users/current-user";
import {Link} from "react-router-dom";
import SearchComponent from "./search";
import ResultComponent from "./search-results";
import searchReducer from "./reducers/search-reducer";
import DetailComponent from "./search-details";
import EditProfile from "./profile/edit-profile";
import ProfileOther from "./profile/profile-other";

const store = configureStore({
    reducer: {
        users: usersReducer,
        search: searchReducer,
    }
})

function App() {
    return (
        <div className="container mt-4 mb-4">
            <Provider store={store}>
                <CurrentUser>
                    <BrowserRouter>
                        <div className="row mt-2">
                            <div className="float-md-end">
                                <Link className="float-md-end" to="/Login">Login</Link>
                                <Link className="me-3 float-md-end" to="/register">Register</Link>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3">
                                <NavigationSidebar active="home"/>
                            </div>

                            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-9"
                                 style={{"position": "relative"}}>
                                <Routes>
                                    <Route index element={<HomeComponent/>}/>
                                    <Route path="/users" element={<Users/>}/>
                                    <Route path="/home" element={<HomeComponent/>}/>
                                    <Route path="/register" element={<Register/>}/>
                                    <Route path="/login" element={<Login/>}/>
                                    <Route path="/profile" element={
                                        <ProtectedRoute>
                                            <Profile/>
                                        </ProtectedRoute>
                                    }/>
                                    <Route path='/search' element={<SearchComponent/>}/>
                                    <Route path='/search/*' element={<ResultComponent/>}/>
                                    <Route path='/details/*' element={<DetailComponent/>}/>
                                    <Route path="/edit-profile" element={
                                        <ProtectedRoute>
                                            <EditProfile/>
                                        </ProtectedRoute>
                                    }/>
                                    <Route path="/profile/:uid" element={<ProfileOther/>}></Route>
                                </Routes>
                            </div>
                        </div>
                    </BrowserRouter>
                </CurrentUser>
            </Provider>
        </div>
    );
}

export default App;