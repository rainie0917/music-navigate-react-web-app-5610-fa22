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
        <Link to="/home" className={`list-group-item ${active === 'home'?'active':''}`}>
          <i className="bi bi-house-door-fill p-1 text-muted"></i>
          <label className="text-muted">Home</label>
        </Link>
        <Link to="/search" className={`list-group-item ${active === 'search'?'active':''}`}>
          <i className="bi bi-search p-1 text-muted"></i>
          <label className="text-muted">Search</label>
        </Link>
        <Link to="/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
          <i className="bi bi-person-circle p-1 text-muted"></i>
          <label className="text-muted">Profile</label>
        </Link>
      </div>
  );
};
export default NavigationSidebar;