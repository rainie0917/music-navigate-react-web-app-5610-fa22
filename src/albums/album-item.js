import React from "react";
import PictureSummary from './picture-summary';

const AlbumItem = ({
  album = {
  },
}) => {
  return (
      <>
        <div className="rounded row m-0 ps-2 pe-2 pt-2 pb-2">
          <div className="col-1 justify-content-center">
            <div><img alt="icon" className="rounded-circle wd-avatar" src={album.icon} height="60px"/></div>
          </div>

          <div className="col-11 row ms-2">

            <div className="col-11 mb-2">
              <p>
                            <span className="wd-author">{album.userName}&nbsp;
                              <i className="fas fa-check-circle"/></span>&nbsp;
                @{album.handle}&nbsp;•&nbsp;{album.time}
              </p>
              <div className="wd-content">{album.content}</div>
            </div>
            <div className="col-1">
              <div>...</div>
            </div>

            <PictureSummary album={album}/>

            <div className="col-12 d-flex m-auto justify-content-between">
              <div>
                            <span>
                            <i className="far fa-comment fa-flip-horizontal"/>
                            </span>{album.comment_count}
              </div>
              <div>
                <span><i className="fas fa-retweet"/></span>
                {album.retweet_count}</div>
              <div>
                <span><i className="fas fa-heart"/></span>
                {album.like_count}</div>
              <div>
                <i className="fas fa-external-link-alt"/>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </>
  );
};
export default AlbumItem;