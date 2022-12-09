import React from 'react';

const PictureSummary = ({
  album = {
  },
}) => {
  if (album.title === undefined) {
    return (
        <div className="col-12 wd-frame">
          <div className="wd-border-thin">
            <img className="img-fluid" alt="post-realted" src={album.image}/>
          </div>
        </div>
    );
  }
  else {
    return (
        <>
          <div className="col-12 wd-frame">
            <div className="wd-border-thin">
              <img className="img-fluid wd-picture" alt="post-related" src={album.image}/>
            </div>
          </div>
          <div className="col-12">
            <div className="wd-tuit-border wd-rounded-corners-bottom p-3">
              <div className="wd-author">{album.title}</div>
              <span>{album.summary}</span>
              <span>
                            <i className="fas fa-link fa-xs"></i>{album.link}
                        </span>
            </div>
          </div>
        </>
    );
  }
};

export default PictureSummary;