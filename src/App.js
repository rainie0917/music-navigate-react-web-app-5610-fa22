import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
// import Navigation from "./navigation";
import NavigationSidebar
    from "./navigation-sidebar";
import HomeComponent from "./home";
import usersReducer from "./reducers/users-reducer";
import Register from "./register/register";
import Login from "./login/login";
import Profile from "./users/profile";
import ProtectedRoute from "./users/protected-route"
import CurrentUser from "./users/current-user";

const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

function App() {
    return (
        <div className="container mt-2 mb-4">
            <Provider store={store}>
                <CurrentUser>
                    <BrowserRouter>

                        <div className="float-md-end">
                            <button type="button"
                                    className="btn btn-secondary">Log In
                            </button>
                            <button type="button"
                                    className="btn btn-light">Register
                            </button>
                        </div>

                        {/*<Navigation/>*/}
                        <br/>

                        <div className="row mt-2">

                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3">
                            <NavigationSidebar active="home"/>
                        </div>

                        <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-9"
                             style={{"position": "relative"}}>
                            <Routes>
                                <Route path="home"    element={<HomeComponent/>}/>
                                <Route path="/register" element={<Register/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/profile" element={
                                    <ProtectedRoute>
                                        <Profile/>}
                                    </ProtectedRoute>
                                }/>
                             </Routes>
                        </div>

                        </div>

                        {/*<div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">*/}
                        {/*    <h2>Others</h2>*/}
                        {/*    /!*<WhoToFollowList/>*!/*/}
                        {/*</div>*/}


                    </BrowserRouter>
                </CurrentUser>
            </Provider>
        </div>
    );
}

export default App;