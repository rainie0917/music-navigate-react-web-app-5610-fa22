import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[0];
  return (

      <div className="list-group">
        {/*<h2>Spotify</h2>*/}
        {/*<a href="https://twitter.com/explore" className="list-group-item">Tuiter</a>*/}
        <Link to="/home" className={`list-group-item ${active === 'home'?'active':''}`}>
          <i className="bi bi-house-door-fill p-1"></i>
          Home
        </Link>
        <Link to="/search/search" className={`list-group-item ${active === 'search'?'active':''}`}>
          <i className="bi bi-search p-1"></i>
          Search
        </Link>
        <Link to="/profile/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
          <i className="bi bi-person-circle p-1"></i>
          Profile
        </Link>
        <Link to="/" className={`list-group-item ${active === 'notification'?'active':''}`} >
          Your Library
        </Link>
        <Link to="/" className={`list-group-item ${active === 'message'?'active':''}`} >
          Liked Songs
        </Link>
        <Link to="/" className={`list-group-item ${active === 'bookmark'?'active':''}`} >
          Created Playlist
        </Link>

        {/*<a href="https://twitter.com/explore" className={`list-group-item ${active === 'more'?'active':''}`}>*/}
        {/*  More*/}
        {/*</a>*/}
      </div>
  );
};
export default NavigationSidebar;