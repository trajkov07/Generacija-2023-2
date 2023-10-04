export const Albums = ({ listOfAlbums, deleteAlbum }) => {
  console.log(listOfAlbums);
  return (
    <div id="albums">
      {listOfAlbums.length > 0 ? (
        <div>
          {listOfAlbums.map((album) => {
            return (
              <div key={album.id}>
                <hr />
                <p>Id: {album.id}</p>
                <h3>Title: {album.title}</h3>
                <button onClick={() => deleteAlbum(album)}>Delete</button>
              </div>
            );
          })}
        </div>
      ) : (
        <h3>Albums are loading</h3>
      )}
    </div>
  );
};
