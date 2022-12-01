import albums from './albums.json';
import AlbumItem from './album-item';

const AlbumList = () => {
  return (
      <>
        {albums.map((album)=> (
            <AlbumItem album={album}/>
        ))}
      </>
  );
};
export default AlbumList;