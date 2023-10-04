import { Popup } from "./Popup";

export const Gallery = ({
  listOfPhotos,
  selectedPhoto,
  setSelectedPhoto,
  closePhoto,
}) => {
  //   console.log(closePhoto);
  console.log(selectedPhoto);
  return (
    <div id="gallery">
      <h2>Our Gallery!</h2>
      <div id="gallery">
        {
          // .slice ja kratime nizata, gi zemame prvite 20 elementi
          listOfPhotos.slice(0, 20).map((photo) => {
            return (
              <div
                className="image-holder"
                onClick={() => setSelectedPhoto(photo)}
                key={photo.id}
              >
                <img src={photo.thumbnailUrl} alt={photo.title} />
              </div>
            );
          })
        }
      </div>
      {selectedPhoto !== "" && (
        <Popup imageUrl={selectedPhoto.url} closePhoto={closePhoto} />
      )}
    </div>
  );
};
