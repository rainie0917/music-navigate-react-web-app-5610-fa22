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
import ProtectedRoute from "./users/protected-route"
import CurrentUser from "./users/current-user";
import SearchComponent from "./search";
import ResultComponent from "./result";
import searchReducer from "./reducers/search-reducer";

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
                        <Navigation/>
                        <Routes>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/profile" element={
                                <ProtectedRoute>
                                    <Profile/>}
                                </ProtectedRoute>
                            }/>
                            <Route path='/search' element={<SearchComponent/>}/>
                            <Route path='/search/*' element={<ResultComponent/>}/>
                        </Routes>
                    </BrowserRouter>
                </CurrentUser>
            </Provider>
        </div>
    );
}

export default App;