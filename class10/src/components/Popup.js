export const Popup = ({ imageUrl, closePhoto }) => {
  //   console.log(closePhoto);
  return (
    <div id="popup">
      <button
        onClick={() => {
          closePhoto();
        }}
      >
        &times;
      </button>
      <div className="popup-container">
        <img src={imageUrl} alt="Big picture" />
      </div>
    </div>
  );
};
